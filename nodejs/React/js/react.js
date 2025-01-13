
const react = (function(){
//1st
function createElement(type,attributes=[],...children){
  let childElements=[].concat(...children).reduce((acc,child)=>{
      if(child !== null && child !== true && child !== false){
        if(child instanceof Object){
          acc.push(child)
        }else{
          acc.push(createElement("text",{
              textContent:child
              }))
        }
      }
      return acc
  },[]);
  
  
  return {
    type,
    children: childElements,
    props: Object.assign({ children : childElements} , attributes),
  }
}

const render = function(vdom,container,oldDom=container.firstChild){
  if(!oldDom){
    mountElement(vdom,container,oldDom);
  }
}

const mountElement = function(vdom,container,oldDom){
  return mountSimpleNode(vdom,container,oldDom);
}


const mountSimpleNode = function(vdom,container,oldDomElement,perantComponent){
  let newDomElement=null;
  const nextSibling = oldDomElement && oldDomElement.nextSibling;
  if(vdom.type === 'text'){
    newDomElement=document.createTextNode(vdom.props.textContent);
  }else{
    newDomElement=document.createElement(vdom.type);
    updateDomElement(newDomElement,vdom)
  }
  
  newDomElement._virtualElement = vdom;
  
  if(nextSibling){
    container.insertBefore(newDomElement,nextSibling);
  }else{
    container.appendChild(newDomElement);
  }
  
  vdom.children.forEach(child=>{
    mountElement(child,newDomElement)
  })
}

function updateDomElement(domElement, newVirtualElement, oldVirtualElement=[]){
  const newProps = newVirtualElement.props || {};
  const oldProps = oldVirtualElement.props || {};
  
  Object.keys(newProps).forEach(propName=>{
    const newProp = newProps[propName];
    const oldProp = oldProps[propName];
    
    if(newProp !== oldProp){
      if(propName.slice(0,2) === 'on'){
        const eventName=propName.tolowerCase().slice(2);
        domElement.addEventListener(eventName,newProp,false)
        if(oldProp){
          domElement.removeEventListener(eventName,oldProp,false)
        }
      }
    }
  });
}

//1st
return {
  createElement,
  render
}

}());

console.log(react);