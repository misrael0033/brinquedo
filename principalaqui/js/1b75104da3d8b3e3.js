
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.uhRbxNvx.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.COMeaTrJ.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor-legacy.BaWHot8y.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.eNxiqsIV.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.D96a5jzx.js","/cdn/shopifycloud/checkout-web/assets/c1/unactionable-errors-legacy.C44I2iEd.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer-legacy.CbZrwkeJ.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency-legacy.BRSxLXE-.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-legacy.BVbK31kP.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops-legacy.B9p3mmkO.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-pt-BR-legacy.C5J-PwKn.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.B1R0G5_F.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.DNohQfJR.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery-legacy.ljoXz184.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.DOoMAstP.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.DSBTXXee.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin-legacy.BQevO6JD.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-legacy.D4vk6Ppb.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.DJPvVq7M.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl-legacy.BsOihV8e.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.B3NXTVfU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.C7qkVkR-.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.DZUptI6j.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.-QfO2Cb3.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.hrRmudLQ.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo-legacy.BLt1w-Wm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.BeX5Aijn.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton-legacy.Bo86PDtW.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.D2yWq1zu.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.Cca0wHZu.js","/cdn/shopifycloud/checkout-web/assets/c1/flags-legacy.DUKcmt8K.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.BWZe5fwk.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.CqEXTe90.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options-legacy.LAzR6Riv.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.Qty4j9-l.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.BpIEanlw.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.Cm4JQxQJ.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  