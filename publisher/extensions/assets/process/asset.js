var assetLinks = function (user) {
    return {
        title: 'Process'
    };
};

asset.manager = function(ctx){
	return {
		create:function(options){
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
            },{
                url:'processes',
                path:'processes.jag'
            }],
            pages: [{
                title: 'Asset: ' + type,
                url: 'asset',
                path: 'asset.jag'
            }, {
                title: 'Assets ' + type,
                url: 'assets',
                path: 'assets.jag'
            }, {
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
            },{
                title:'Variant'+type,
                url:'variant',
                path:'variant.jag'
            }]
        }
    };
};