define(
    [
        'jquery',
        'Magento_Checkout/js/model/full-screen-loader',
    ],
    function ($, fullScreenLoader) {

        let CarLoader = {

            currentIndex: 0,

            data : [],

            imageContainerIdentifier : '.image-container',

            imageBoxIdentifier : '.image-box-identifier',

            attributeContainerOneIdentifier : '.attributes-container-one',

            attributeContainerTwoIdentifier : '.attributes-container-two',

            itemDescriptionContainer: '.item-description',

            previousButtonIdentifier: '.previous-button',

            nextButtonIdentifier: '.next-button',

            linkedInLinkIdentifier: '.share-link.linkedin',

            twitterLinkIdentifier: '.share-link.twitter',

            facebookLinkIdentifier: '.share-link.facebook',

            baseUrls : {
                'facebook':'https://www.facebook.com/sharer/sharer.php?u=',
                'twitter':'https://twitter.com/share?url=',
                'linkedin':'https://www.linkedin.com/shareArticle?mini=true&url='
            },

            init : function(data){
                let refined = JSON.parse(data);
                this.data = refined.vehicles;
                this.loadItems(this.getCurrentIndex());
                this.hidePreviousButton();
            },

            getData : function(){
                return this.data;
            },

            incrementIndex : function(){
                this.currentIndex++;
            },

            decrementIndex : function(){
                this.currentIndex--;
            },

            getCurrentIndex: function(){
                return this.currentIndex;
            },

            previous: function () {
                fullScreenLoader.startLoader();
                this.decrementIndex();
                let currIndex = this.getCurrentIndex();
                this.loadItems(currIndex);
                if(currIndex==0){
                    this.hidePreviousButton();
                }
                if(currIndex+1 < this.data.length){
                    this.showNextButton();
                }
                fullScreenLoader.stopLoader();
            },

            next: function () {
                fullScreenLoader.startLoader();
                this.incrementIndex();
                let currIndex = this.getCurrentIndex();
                this.loadItems(currIndex);
                if(currIndex+1 == this.data.length){
                    this.hideNextButton();
                }
                if(currIndex>0){
                    this.showPreviousButton();
                }
                fullScreenLoader.stopLoader();
            },

            loadItems: function (index) {
                let item = this.data[index];
                $(CarLoader.imageContainerIdentifier).css({'background-image':'url("'+item.thumbnailImage+'")'});
                this.listAttributes(index);
                this.setUrl('facebook', item.thumbnailImage, this.facebookLinkIdentifier);
                this.setUrl('twitter', item.thumbnailImage, this.twitterLinkIdentifier);
                this.setUrl('linkedin', item.thumbnailImage, this.linkedInLinkIdentifier);
                this.setItemDescription(index);
            },

            listAttributes: function (index) {
                let item = this.data[index],
                    counter = 0,
                    className = '',
                    html = '',
                    itemsCount = this.getItemsCount(item),
                    itemsHolder = [];
                this.clearAttributesContainer();
                for(let p in item){
                    className = (counter%2==0) ? 'alternate-bg' : 'plane-bg';
                    console.log(p, item[p]);
                    html='';
                    html+='<li class="'+className+' attribute-item">';
                    html+='<div class="attribute-label">'+p+'</div>';
                    html+='<div class="attribute-value">'+item[p]+'</div>';
                    html+='<div style="clear:both"></div>';
                    html+='</li>';
                    itemsHolder.push(html);
                    counter++;
                }

                for (let v=0; v < itemsHolder.length; v++){
                    if(v <= itemsCount/2){
                        $(this.attributeContainerOneIdentifier).append(itemsHolder[v])
                    }else{
                        $(this.attributeContainerTwoIdentifier).append(itemsHolder[v])
                    }
                }

            },

            clearAttributesContainer: function(){
                $(this.attributeContainerOneIdentifier).html('');
                $(this.attributeContainerTwoIdentifier).html('');
            },

            setItemDescription : function(index){
                $(this.itemDescriptionContainer).html(this.data[index].attribute1);
            },

            getItemsCount : function (obj) {
                let count = 0;
                for(let q in obj){
                    if(obj.hasOwnProperty(q)){
                        count++;
                    }
                }
                return count;
            },
            
            hidePreviousButton: function () {
                $(this.previousButtonIdentifier).css({'visibility':'hidden'});
            },

            showPreviousButton: function () {
                $(this.previousButtonIdentifier).css({'visibility':'visible'});
            },
            
            hideNextButton: function () {
                $(this.nextButtonIdentifier).css({'visibility':'hidden'});
            },

            showNextButton: function () {
                $(this.nextButtonIdentifier).css({'visibility':'visible'});
            },

            setUrl: function (type, url, identifier) {
                let baseUrl = this.baseUrls[type];
                let fullUrl = baseUrl+url;
                $(identifier).attr('href', fullUrl);
            }
        }
        return CarLoader;
    });