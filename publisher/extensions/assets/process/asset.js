var assetLinks = function(user) {
    return {
        title: 'Process'
    };
};

asset.manager = function(ctx) {
    return {
        create: function(options) {

            log.info("Entered");
            var ref = require('utils').time;
            //Check if the options object has a createdtime attribute and populate it 
            if ((options.attributes) && (options.attributes.hasOwnProperty('overview_createdtime'))) {
                options.attributes.overview_createdtime = ref.getCurrentTime();
            }
            this._super.create.call(this, options);

            // log.info(options);
            var asset = this.get(options.id);
            log.info(asset);
            //TODO
            `
            //Adding Associatin for Predecessors
            var tempArray1 = asset.attributes.properties_predecessors.split("\,");

            for (var i = 0; i < tempArray1.length; i++) {

                    var preAsset = this.get(tempArray1[i]);
                this.registry.addAssociation(asset.path, preAsset.path, "Predecessors");
                
            };

             //Adding Associatin for properties_specializations
            var tempArray2 = asset.attributes.properties_specializations.split("\,");

            for (var i = 0; i < tempArray2.length; i++) {

                    var specAsset = this.get(tempArray2[i]);
                this.registry.addAssociation(asset.path, specAsset.path, "Specializations");
                
            };


            //Adding Associatin for properties_generalizations
            var tempArray3 = asset.attributes.properties_generalizations.split("\,");

            for (var i = 0; i < tempArray.length; i++) {

                    var genAsset = this.get(tempArray3[i]);
                this.registry.addAssociation(asset.path, genAsset3.path, "Generalizations");
                
            };

                 //Adding Associatin for properties_successors
            var tempArray4 = asset.attributes.properties_successors.split("\,");

            for (var i = 0; i < tempArray4.length; i++) {

                    var genAsset = this.get(tempArray4[i]);
                this.registry.addAssociation(asset.path, genAsset.path, "Successors");
                
            };
            /*Get info from the four fields and string split and add associations with special names*/



            //   this.registry.addAssociation(asset.path, path, GovernanceConstants.USED_BY);;		
        }
    };
};

asset.server = function(ctx) {
    var type = ctx.type;
    return {
        onUserLoggedIn: function() {},
        endpoints: {
            apis: [{
                url: 'assets',
                path: 'assets.jag'
            }, {
                url: 'processes',
                path: 'processes.jag'
            }],
            pages: [{
                title: 'Asset: ' + type,
                url: 'asset',
                path: 'asset.jag'
            }, {}, {
                title: 'Create ' + type,
                url: 'create',
                path: 'create.jag'
            }, {
                title: 'Update ' + type,
                url: 'update',
                path: 'update.jag'
            }, {
                title: 'Details ' + type,
                url: 'details',
                path: 'details.jag'
            }, {
                title: 'List ' + type,
                url: 'list',
                path: 'list.jag'
            }, {
                title: 'Lifecycle',
                url: 'lifecycle',
                path: 'lifecycle.jag'
            }, {
                title: 'Variant' + type,
                url: 'variant',
                path: 'variant.jag'
            }]
        }
    };
};