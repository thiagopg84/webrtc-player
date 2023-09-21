const path = require('path');
const plugin = require('@parcel/plugin');
const packageJson = require('../package.json');

const namer = new plugin.Namer({
  name({ bundle, bundleGraph, logger }) {
    const shouldReturnDistEntry = () => {
      const bundleGroup =
        bundleGraph.getBundleGroupsContainingBundle(bundle)[0];
      const isEntry = bundleGraph.isEntryBundleGroup(bundleGroup);
      const bundleGroupBundles =
        bundleGraph.getBundlesInBundleGroup(bundleGroup);
      const mainBundle = bundleGroupBundles.find((b) =>
        b.getEntryAssets().some((a) => a.id === bundleGroup.entryAssetId)
      );

      return isEntry && bundle.id === mainBundle.id && bundle.target?.distEntry;
    };

    if (shouldReturnDistEntry()) {
      return bundle.target.distEntry;
    }

    const origName = path.basename(bundle.getMainEntry().filePath);

    if ('demo-lib.ts' === origName) {
      let libName = `webrtc-player-${packageJson.version}`;

      if (!bundle.needsStableName) {
        libName += '.' + bundle.hashReference;
      }

      libName += '.' + bundle.type;

      logger.info({
        message: `Rewrite ${origName} -> ${libName}`
      });

      return libName;
    }

    // Continue to next Namer
    return null;
  }
});

module.exports = namer;
