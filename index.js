(function(window){
    window.oldXMLHttpRequest = window.oldXMLHttpRequest || window.XMLHttpRequest;
    let isHook = false;
    function MyXMLHttpRequest () {
        const allowableMethods = ['GET', 'POST'];
        this.xhr = new window.oldXMLHttpRequest();
        for (let attr in this.xhr) {
            let type = '';
            try {
                type = typeof this.xhr[attr]
            } catch (e) {}
            if (type === 'function') {
                this[attr] = function() {
                    let args = [].slice.call(arguments)
                    return this.xhr[attr].apply(this.xhr, args);
                }
            } else if(attr !== 'open') {
                Object.defineProperty(this, attr, {
                    get () {
                        return this.xhr[attr];
                    },
                    set (newVal) {
                        this.xhr[attr] =  newVal;
                    }
                })
            }
        }
        this.open = (method, url, async, username, password) => {
           if(!allowableMethods.includes(method) && isHook){
                if (url.includes('?')){
                    url += '&_method=' + method;
                } else {
                    if (url[url.length - 1] === '/'){
                        url = url.substr(0, url.length - 1);
                    }
                    url += '?_method=' + method;
                }
                return this.xhr.open('POST', url, async, username, password);
            }
            return this.xhr.open(method, url, async, username, password);
        }
    }
    const onlyGetPost = {
        hook () {
            isHook = true;
            window.XMLHttpRequest = MyXMLHttpRequest;
        },
        unHook () {
            isHook = false;
            window.XMLHttpRequest = window.oldXMLHttpRequest;
        }
    }
    window.onlyGetPost = onlyGetPost;
})(window);
export default window.onlyGetPost;
