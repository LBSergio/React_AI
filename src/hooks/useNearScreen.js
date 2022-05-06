import React from 'react';

export function useNearScreen () {
    const [show, setShow] = React.useState(false);
    const element = React.useRef(null);

    React.useEffect(function(){
        Promise.resolve(
            typeof IntersectionObserver != 'undefined' ? 
                IntersectionObserver : 
                import('intersection-observer')
        ).then(() => {
                const observer =new IntersectionObserver(function(entries){
                    const { isIntersecting } = entries[0];
                    if(isIntersecting){
                        setShow(true);
                        observer.disconnect();
                    }            
                })
                observer.observe(element.current);
            })        
    }, [element]);

    return [show, element];
}