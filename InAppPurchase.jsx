import { Text } from 'react-native';
import { requestPurchase, requestSubscription } from 'react-native-iap';
import {
  initConnection,
  purchaseErrorListener,
  purchaseUpdatedListener,
  ProductPurchase,
  PurchaseError,
  flushFailedPurchasesCachedAsPendingAndroid,
  SubscriptionPurchase
} from 'react-native-iap';

class App extends Component {
  purchaseUpdateSubscription = null;
  purchaseErrorSubscription = null;

  componentDidMount() {
    initConnection().then(() => {
      // we make sure that "ghost" pending payment are removed
      // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)
      flushFailedPurchasesCachedAsPendingAndroid()
        .catch(() => {
          // exception can happen here if:
          // - there are pending purchases that are still pending (we can't consume a pending purchase)
          // in any case, you might not want to do anything special with the error
        })
        .then(() => {
          this.purchaseUpdateSubscription = purchaseUpdatedListener(
            (purchase: SubscriptionPurchase | ProductPurchase) => {
              console.log('purchaseUpdatedListener', purchase);
              const receipt = purchase.transactionReceipt;
              if (receipt) {
                yourAPI
                  .deliverOrDownloadFancyInAppPurchase(
                    purchase.transactionReceipt,
                  )
                  .then(async (deliveryResult) => {
                    if (isSuccess(deliveryResult)) {
                      // Tell the store that you have delivered what has been paid for.
                      // Failure to do this will result in the purchase being refunded on Android and
                      // the purchase event will reappear on every relaunch of the app until you succeed
                      // in doing the below. It will also be impossible for the user to purchase consumables
                      // again until you do this.

                      // If consumable (can be purchased again)
                      await finishTransaction({purchase, isConsumable: true});
                      // If not consumable
                      await finishTransaction({purchase, isConsumable: false});
                    } else {
                      // Retry / conclude the purchase is fraudulent, etc...
                    }
                  });
              }
            },
          );

          this.purchaseErrorSubscription = purchaseErrorListener(
            (error: PurchaseError) => {
              console.warn('purchaseErrorListener', error);
            },
          );
        });
    });
  }

  componentWillUnmount() {
    if (this.purchaseUpdateSubscription) {
      this.purchaseUpdateSubscription.remove();
      this.purchaseUpdateSubscription = null;
    }

    if (this.purchaseErrorSubscription) {
      this.purchaseErrorSubscription.remove();
      this.purchaseErrorSubscription = null;
    }
  }

  purchase = async (sku: string) => {
    try {
      await requestPurchase({
        sku,
        andDangerouslyFinishTransactionAutomaticallyIOS: false,
      });
    } catch (err) {
      console.warn(err.code, err.message);
    }
  };

  subscribe = async (sku: string, offerToken: string?) => {
    try {
      await requestSubscription({
        sku,
        ...(offerToken && {subscriptionOffers: [{sku, offerToken}]}),
      });
    } catch (err) {
      console.warn(err.code, err.message);
    }
  };

  /**
   * For one-time products
   */
  render() {
    return (
      <Pressable onPress={() => this.purchase(product.productId)}>
        <Text>Press</Text>
      </Pressable>
    );
  }

  /**
   * For subscriptions products
   */
  render() {
    if (Platform.OS == 'android') {
      return product.subscriptionOfferDetails.map((offer) => (
        <Pressable
          onPress={() =>
            this.subscribe(product.productId, offer.offerToken)
          }
        >
          <Text>Cleck me</Text>
        </Pressable>
      ));
    } else {
      return (
        <Pressable
          onPress={() => this.subscribe(product.productId, null)}
        >
          <Text>Click here</Text>
        </Pressable>
      );
    }
  }

}