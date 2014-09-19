var render = function(theme, data, meta, require) {
    theme('single-col-fluid', {
        title: 'Asset',
        header: [{
            partial: 'header',
            context: data
        }],
        ribbon: [{
            partial: 'ribbon',
            context: data
        }],
        leftnav: [{
        	partial:'left-nav',
        	context:data
        }],
        listassets: [{
            partial: 'update_asset',
            context: data
        }]
    });
};