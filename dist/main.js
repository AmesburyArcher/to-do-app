(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{N:()=>q,s:()=>x});const t=document.querySelector("#to-do-list"),n=document.querySelector(".to-do-title"),o=document.querySelector(".task-count"),r=document.querySelector(".tasks"),s=document.querySelector("#task-template"),c=e=>{const t=e.tasks.filter((e=>!e.complete)).length,n=1===t?"task":"tasks";o.textContent=`${t} ${n} remaining`},a=()=>{const e=m.find((e=>e.id===u));null==e?t.style.display="none":(t.style.display="",n.textContent=e.name,c(e),f(r),e.tasks.forEach((e=>{const t=document.importNode(s.content,!0),n=t.querySelector("input");n.id=e.id,n.checked=e.complete,t.querySelector(".task-name").textContent=e.name;const o=t.querySelector(".task-desc");e.desc?o.textContent=` Description: ${e.desc}`:o.textContent="No Description.";const c=t.querySelector(".task-date");e.date?c.textContent=` Complete by: ${e.date}`:c.textContent="No Completion Date.",r.appendChild(t)})))},l=(e,t,n)=>({id:Date.now().toString(),name:e,desc:t,date:n,complete:!1}),i="task.list",d="task.selectedFolder";let u=localStorage.getItem(d),m=JSON.parse(localStorage.getItem(i))||[];const v=()=>{y(),p()},y=()=>{localStorage.setItem(i,JSON.stringify(m)),localStorage.setItem(d,u)},p=()=>{const e=document.querySelector(".directory");f(e),m.forEach((t=>{const n=q("li",null,["directory-folder"],t.name);n.dataset.listId=t.id,t.id===u&&n.classList.add("directory-active"),e.appendChild(n);const o=q("span",null,["directory-folder-icons"],null);o.innerHTML='<button class="button-edit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" /><line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg></button><button class="button-trash"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-trash" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>',n.classList.contains("directory-active")&&n.appendChild(o)}))},f=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},k=e=>{const t=document.querySelector(".add-dir-btn-text");e.preventDefault();const n=t.value;if(null==n||""===n)return;const o=L(n);t.value=null,m.push(o),v()},h=e=>{"li"===e.target.tagName.toLowerCase()&&(u=e.target.dataset.listId,v(),a())},g=e=>{e.target.classList.contains("icon-trash")&&e.target.parentElement.parentElement.parentElement.dataset.listId===u&&(m=m.filter((e=>e.id!==u)),u=null,x())},S=e=>{if(e.target.classList.contains("icon-edit")&&e.target.parentElement.parentElement.parentElement.dataset.listId===u){const e=document.querySelector(".directory-modal-container");e.classList.toggle("active");const t=document.querySelector("#directory-edit-form"),n=document.querySelector(".icon-tabler-square-x"),o=n=>{n.preventDefault();const r=document.querySelector("#text-dir"),s=r.value;null!=s&&""!==s&&(m.forEach((e=>{e.id===u&&(e.name=s)})),r.value=null,v(),e.classList.remove("active"),t.removeEventListener("submit",o))},r=()=>{e.classList.remove("active"),t.removeEventListener("submit",o),n.removeEventListener("click",r)};n.addEventListener("click",r),t.addEventListener("submit",o)}},L=e=>({id:Date.now().toString(),name:e,tasks:[]});function q(e,t,n,o){const r=document.createElement(e);return t&&(r.id=t),n&&n.forEach((e=>r.classList.add(e))),o&&(r.textContent=o),r}const x=()=>{v(),a()};(()=>{const e=document.querySelector(".light-dark-mode");e.addEventListener("click",(function(){document.body.classList.toggle("active"),e.classList.toggle("active");const t=document.querySelector(".current-theme");e.classList.contains("active")?t.textContent="Dark Mode":t.textContent="Light Mode"}))})(),x(),(()=>{const e=document.querySelector("#add-dir-form"),t=document.querySelector(".directory");e.addEventListener("submit",k),t.addEventListener("click",h),t.addEventListener("click",g),t.addEventListener("click",S)})(),document.querySelector(".create-task-btn").addEventListener("click",(()=>{document.querySelector(".modal-container").classList.add("active")})),document.querySelector("#add-task").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector(".modal-container"),n=document.querySelector("#task"),o=document.querySelector("#description"),r=document.querySelector("#date"),s=n.value;if(null==s||""===s)return;const c=o.value,a=r.value,i=l(s,c,a);n.value=null,o.value=null,r.value=null,m.find((e=>e.id===u)).tasks.push(i),t.classList.remove("active"),x()})),r.addEventListener("click",(e=>{if("input"===e.target.tagName.toLowerCase()){const t=m.find((e=>e.id===u));t.tasks.find((t=>t.id===e.target.id)).complete=e.target.checked,y(),c(t)}})),document.querySelector(".delete-tasks").addEventListener("click",(()=>{const e=m.find((e=>e.id===u));e.tasks=e.tasks.filter((e=>!e.complete)),x()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBc0IsQ0NBMUJBLEVBQXdCLENBQUNDLEVBQVNDLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWEYsRUFBb0JJLEVBQUVGLEVBQVlDLEtBQVNILEVBQW9CSSxFQUFFSCxFQUFTRSxJQUM1RUUsT0FBT0MsZUFBZUwsRUFBU0UsRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLE1DSjNFSCxFQUF3QixDQUFDUyxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxJLDBCQ0dsRixNQUFNSSxFQUF5QkMsU0FBU0MsY0FBYyxlQUNoREMsRUFBY0YsU0FBU0MsY0FBYyxnQkFDckNFLEVBQVlILFNBQVNDLGNBQWMsZUFDbkNHLEVBQWdCSixTQUFTQyxjQUFjLFVBQ3ZDSSxFQUFlTCxTQUFTQyxjQUFjLGtCQWlDdENLLEVBQWlCQyxJQUNuQixNQUFNQyxFQUFhRCxFQUFnQkUsTUFBTUMsUUFBT0MsSUFBU0EsRUFBS0MsV0FBVUMsT0FDbEVDLEVBQTZCLElBQWZOLEVBQW1CLE9BQVMsUUFDaERMLEVBQVVZLFlBQWMsR0FBR1AsS0FBY00sZUF3QnZDRSxFQUFjLEtBQ2hCLE1BQU1DLEVBQWVDLEVBQWFDLE1BQUtDLEdBQVFBLEVBQUtDLEtBQU9DLElBRXhDLE1BQWhCTCxFQUNDbEIsRUFBdUJ3QixNQUFNQyxRQUFVLFFBRXZDekIsRUFBdUJ3QixNQUFNQyxRQUFVLEdBQ3ZDdEIsRUFBWWEsWUFBY0UsRUFBYVEsS0FDdkNuQixFQUFjVyxHQUNkUyxFQUFVdEIsR0FDS2EsRUE5QkZSLE1BQU1rQixTQUFRaEIsSUFDM0IsTUFBTWlCLEVBQVU1QixTQUFTNkIsV0FBV3hCLEVBQWF5QixTQUFTLEdBQ3BEQyxFQUFXSCxFQUFRM0IsY0FBYyxTQUN2QzhCLEVBQVNWLEdBQUtWLEVBQUtVLEdBQ25CVSxFQUFTQyxRQUFVckIsRUFBS0MsU0FDTmdCLEVBQVEzQixjQUFjLGNBQy9CYyxZQUFjSixFQUFLYyxLQUU1QixNQUFNUSxFQUFXTCxFQUFRM0IsY0FBYyxjQUN2Q1UsRUFBS3VCLEtBQU9ELEVBQVNsQixZQUFjLGlCQUFpQkosRUFBS3VCLE9BQVNELEVBQVNsQixZQUFjLGtCQUV6RixNQUFNb0IsRUFBV1AsRUFBUTNCLGNBQWMsY0FDdkNVLEVBQUt5QixLQUFPRCxFQUFTcEIsWUFBYyxpQkFBaUJKLEVBQUt5QixPQUFTRCxFQUFTcEIsWUFBYyxzQkFFekZYLEVBQWNpQyxZQUFZVCxRQStDNUJVLEVBQWEsQ0FBQzNCLEVBQU11QixFQUFNRSxLQUNyQixDQUFHZixHQUFJa0IsS0FBS0MsTUFBTUMsV0FBWWhCLEtBQU1kLEVBQU11QixLQUFNQSxFQUFNRSxLQUFNQSxFQUFNeEIsVUFBVSxJQzFHakY4QixFQUF3QixZQUN4QkMsRUFBMkIsc0JBR2pDLElBQUlyQixFQUFpQnNCLGFBQWFDLFFBQVFGLEdBQ3RDekIsRUFBZTRCLEtBQUtDLE1BQU1ILGFBQWFDLFFBQVFILEtBQTJCLEdBRTlFLE1BQU1NLEVBQW9CLEtBQ3RCQyxJQUNBQyxLQUlFRCxFQUFPLEtBQ1RMLGFBQWFPLFFBQVFULEVBQXVCSSxLQUFLTSxVQUFVbEMsSUFDM0QwQixhQUFhTyxRQUFRUixFQUEwQnJCLElBSTdDNEIsRUFBYyxLQUNoQixNQUFNRyxFQUFxQnJELFNBQVNDLGNBQWMsY0FFbER5QixFQUFVMkIsR0FDVm5DLEVBQWFTLFNBQVEyQixJQUNsQixNQUFNQyxFQUFrQkMsRUFBa0IsS0FBTSxLQUFNLENBQUMsb0JBQXFCRixFQUFVN0IsTUFDdEY4QixFQUFnQkUsUUFBUUMsT0FBU0osRUFBVWpDLEdBRXhDaUMsRUFBVWpDLEtBQU9DLEdBQ2hCaUMsRUFBZ0JJLFVBQVVDLElBQUksb0JBRWxDUCxFQUFtQmhCLFlBQVlrQixHQUUvQixNQUFNTSxFQUF1QkwsRUFBa0IsT0FBUSxLQUFNLENBQUMsMEJBQTJCLE1BQ3pGSyxFQUFxQkMsVUFBWSx1NkJBRTlCUCxFQUFnQkksVUFBVUksU0FBUyxxQkFDdENSLEVBQWdCbEIsWUFBWXdCLE9BTTdCbkMsRUFBYU4sSUFDZixLQUFNQSxFQUFLNEMsWUFDUDVDLEVBQUs2QyxZQUFZN0MsRUFBSzRDLGFBZ0J4QkUsRUFBbUJDLElBQ3JCLE1BQU1DLEVBQVVwRSxTQUFTQyxjQUFjLHFCQUV2Q2tFLEVBQUVFLGlCQUNGLE1BQU1DLEVBQVVGLEVBQVFHLE1BQ3hCLEdBQWMsTUFBWEQsR0FBK0IsS0FBWkEsRUFBZ0IsT0FDdEMsTUFBTWhCLEVBQVlrQixFQUFhRixHQUMvQkYsRUFBUUcsTUFBUSxLQUNoQnJELEVBQWF1RCxLQUFLbkIsR0FDbEJOLEtBSUUwQixFQUE2QlAsSUFDTyxPQUFuQ0EsRUFBRVEsT0FBT0MsUUFBUUMsZ0JBQ2hCdkQsRUFBaUI2QyxFQUFFUSxPQUFPbEIsUUFBUUMsT0FDbENWLElBQ0FoQyxNQUtGOEQsRUFBYVgsSUFDWkEsRUFBRVEsT0FBT2hCLFVBQVVJLFNBQVMsZUFBaUJJLEVBQUVRLE9BQU9JLGNBQWNBLGNBQWNBLGNBQWN0QixRQUFRQyxTQUFXcEMsSUFDbEhKLEVBQWVBLEVBQWFSLFFBQU80QyxHQUFhQSxFQUFVakMsS0FBT0MsSUFDakVBLEVBQWlCLEtBR2pCMEQsTUFJRkMsRUFBV2QsSUFDYixHQUFHQSxFQUFFUSxPQUFPaEIsVUFBVUksU0FBUyxjQUFnQkksRUFBRVEsT0FBT0ksY0FBY0EsY0FBY0EsY0FBY3RCLFFBQVFDLFNBQVdwQyxFQUFnQixDQUNqSSxNQUFNNEQsRUFBaUJsRixTQUFTQyxjQUFjLDhCQUM5Q2lGLEVBQWV2QixVQUFVd0IsT0FBTyxVQUNoQyxNQUFNQyxFQUFhcEYsU0FBU0MsY0FBYyx3QkFDcENvRixFQUFrQnJGLFNBQVNDLGNBQWMseUJBRXpDcUYsRUFBZW5CLElBQ2pCQSxFQUFFRSxpQkFDRixNQUFNa0IsRUFBcUJ2RixTQUFTQyxjQUFjLGFBQzVDdUYsRUFBa0JELEVBQW1CaEIsTUFDckIsTUFBbkJpQixHQUErQyxLQUFwQkEsSUFDOUJ0RSxFQUFhUyxTQUFROEQsSUFDZEEsRUFBSXBFLEtBQU9DLElBQ1ZtRSxFQUFJaEUsS0FBTytELE1BR25CRCxFQUFtQmhCLE1BQVEsS0FDM0J2QixJQUNBa0MsRUFBZXZCLFVBQVUrQixPQUFPLFVBQ2hDTixFQUFXTyxvQkFBb0IsU0FBVUwsS0FHdkNNLEVBQWUsS0FDakJWLEVBQWV2QixVQUFVK0IsT0FBTyxVQUNoQ04sRUFBV08sb0JBQW9CLFNBQVVMLEdBQ3pDRCxFQUFnQk0sb0JBQW9CLFFBQVNDLElBR2pEUCxFQUFnQlEsaUJBQWlCLFFBQVNELEdBQzFDUixFQUFXUyxpQkFBaUIsU0FBVVAsS0FPeENkLEVBQWdCaUIsSUFDWixDQUFFcEUsR0FBSWtCLEtBQUtDLE1BQU1DLFdBQVloQixLQUFNZ0UsRUFBS2hGLE1BQU8sS0NqSXpELFNBQVMrQyxFQUFrQnNDLEVBQU16RSxFQUFJMEUsRUFBU2pFLEdBQzFDLE1BQU1rRSxFQUFVaEcsU0FBU2lHLGNBQWNILEdBUXZDLE9BTkd6RSxJQUFJMkUsRUFBUTNFLEdBQUtBLEdBQ2pCMEUsR0FDQ0EsRUFBUXBFLFNBQVN1RSxHQUFZRixFQUFRckMsVUFBVUMsSUFBSXNDLEtBRXBEcEUsSUFBU2tFLEVBQVFqRixZQUFjZSxHQUUzQmtFLEVBR1gsTUFBTWhCLEVBQVMsS0FDWGhDLElBQ0FoQyxLQ2xCZ0IsTUFFcEIsTUFBTW1FLEVBQVNuRixTQUFTQyxjQUFjLG9CQUN0Q2tGLEVBQU9VLGlCQUFpQixTQUV4QixXQUNJN0YsU0FBU21HLEtBQUt4QyxVQUFVd0IsT0FBTyxVQUMvQkEsRUFBT3hCLFVBQVV3QixPQUFPLFVBRXhCLE1BQU1pQixFQUFlcEcsU0FBU0MsY0FBYyxrQkFFekNrRixFQUFPeEIsVUFBVUksU0FBUyxVQUN6QnFDLEVBQWFyRixZQUFjLFlBRTNCcUYsRUFBYXJGLFlBQWMsaUJEUS9Cc0YsR0FDQXJCLElENkJzQixNQUN0QixNQUFNc0IsRUFBVXRHLFNBQVNDLGNBQWMsaUJBQ2pDc0csRUFBZXZHLFNBQVNDLGNBQWMsY0FFNUNxRyxFQUFRVCxpQkFBaUIsU0FBVTNCLEdBQ25DcUMsRUFBYVYsaUJBQWlCLFFBQVNuQixHQUN2QzZCLEVBQWFWLGlCQUFpQixRQUFTZixHQUN2Q3lCLEVBQWFWLGlCQUFpQixRQUFTWixJQ25DdkN1QixHRmJzQnhHLFNBQVNDLGNBQWMsb0JBQy9CNEYsaUJBQWlCLFNBc0VYLEtBQ0Y3RixTQUFTQyxjQUFjLG9CQUMvQjBELFVBQVVDLElBQUksYUF0RUw1RCxTQUFTQyxjQUFjLGFBQy9CNEYsaUJBQWlCLFVBd0VaMUIsSUFDaEJBLEVBQUVFLGlCQUNGLE1BQU1vQyxFQUFZekcsU0FBU0MsY0FBYyxvQkFDbkN5RyxFQUFnQjFHLFNBQVNDLGNBQWMsU0FDdkMwRyxFQUFnQjNHLFNBQVNDLGNBQWMsZ0JBQ3ZDMkcsRUFBZ0I1RyxTQUFTQyxjQUFjLFNBRXZDNEcsRUFBV0gsRUFBY25DLE1BQy9CLEdBQWUsTUFBWnNDLEdBQWlDLEtBQWJBLEVBQWlCLE9BQ3hDLE1BQU01RSxFQUFXMEUsRUFBY3BDLE1BQ3pCcEMsRUFBV3lFLEVBQWNyQyxNQUN6QjVELEVBQU8yQixFQUFXdUUsRUFBVTVFLEVBQVVFLEdBQzVDdUUsRUFBY25DLE1BQVEsS0FDdEJvQyxFQUFjcEMsTUFBUSxLQUN0QnFDLEVBQWNyQyxNQUFRLEtBQ0RyRCxFQUFhQyxNQUFLQyxHQUFRQSxFQUFLQyxLQUFPQyxJQUM5Q2IsTUFBTWdFLEtBQUs5RCxHQUN4QjhGLEVBQVU5QyxVQUFVK0IsT0FBTyxVQUMzQlYsT0F4RkE1RSxFQUFjeUYsaUJBQWlCLFNBYWhCMUIsSUFDZixHQUFzQyxVQUFuQ0EsRUFBRVEsT0FBT0MsUUFBUUMsY0FBMkIsQ0FDM0MsTUFBTTVELEVBQWVDLEVBQWFDLE1BQUtDLEdBQVFBLEVBQUtDLEtBQU9DLElBQ3RDTCxFQUFhUixNQUFNVSxNQUFLUixHQUFRQSxFQUFLVSxLQUFPOEMsRUFBRVEsT0FBT3RELEtBQzdEVCxTQUFXdUQsRUFBRVEsT0FBTzNDLFFBQ2pDaUIsSUFDQTNDLEVBQWNXLE9BakJFakIsU0FBU0MsY0FBYyxpQkFDL0I0RixpQkFBaUIsU0FJTCxLQUN4QixNQUFNNUUsRUFBZUMsRUFBYUMsTUFBS0MsR0FBUUEsRUFBS0MsS0FBT0MsSUFDM0RMLEVBQWFSLE1BQVFRLEVBQWFSLE1BQU1DLFFBQU9DLElBQVNBLEVBQUtDLFdBQzdEb0UsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9saXN0LWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2RpcmVjdG9yeS1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9nZ2xlVGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBjcmVhdGVIVE1MRWxlbWVudCwgcmVuZGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHJlbmRlckxpc3RzLCBjcmVhdGVEaXJMaXN0ZW5lciwgc2F2ZUFuZFJlbmRlckxpc3QsIGRpcmVjdG9yeUFyciwgc2VsZWN0ZWRGb2xkZXIsIGNsZWFyTGlzdCwgc2F2ZSB9IGZyb20gXCIuL2RpcmVjdG9yeS1jcmVhdG9yXCI7XG5cbmNvbnN0IGZvbGRlckRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG8tZG8tbGlzdCcpO1xuY29uc3QgZm9sZGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tdGl0bGUnKTtcbmNvbnN0IHRhc2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvdW50Jyk7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10ZW1wbGF0ZScpO1xuXG5cbmNvbnN0IGxpc3RMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzay1idG4nKTtcbiAgICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFza01vZGFsKVxuXG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0Rm9ybSk7XG5cbiAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NoZWNrKTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS10YXNrcycpO1xuICAgIGRlbGV0ZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlU2VsZWN0ZWRUYXNrcylcbiAgICBcbn1cblxuY29uc3QgZGVsZXRlU2VsZWN0ZWRUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkaXJlY3RvcnlBcnIuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkRm9sZGVyKTtcbiAgICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKHRhc2sgPT4gIXRhc2suY29tcGxldGUpO1xuICAgIHJlbmRlcigpO1xufVxuXG5jb25zdCB0YXNrQ2hlY2sgPSAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkaXJlY3RvcnlBcnIuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkRm9sZGVyKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZCkgXG4gICAgICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHNhdmUoKTtcbiAgICAgICAgcmVuZGVyVGFza051bShzZWxlY3RlZExpc3QpO1xuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyVGFza051bSA9IChzZWxlY3RlZFRhc2tOdW0pID0+IHtcbiAgICBjb25zdCBpbmNvbXBsZXRlID0gc2VsZWN0ZWRUYXNrTnVtLnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlKS5sZW5ndGg7XG4gICAgY29uc3QgdGFza3NTdHJpbmcgPSBpbmNvbXBsZXRlID09PSAxID8gXCJ0YXNrXCIgOiBcInRhc2tzXCI7XG4gICAgdGFza0NvdW50LnRleHRDb250ZW50ID0gYCR7aW5jb21wbGV0ZX0gJHt0YXNrc1N0cmluZ30gcmVtYWluaW5nYDtcbn1cblxuY29uc3QgcmVuZGVyVGFza0xpc3QgPSAoc2VsZWN0ZWRUYXNrTGlzdCkgPT4ge1xuICAgIHNlbGVjdGVkVGFza0xpc3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RPTSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdGFza0RPTS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBjaGVja0JveC5pZCA9IHRhc2suaWQ7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9ICB0YXNrRE9NLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSB0YXNrRE9NLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2MnKVxuICAgICAgICB0YXNrLmRlc2MgPyB0YXNrRGVzYy50ZXh0Q29udGVudCA9IGAgRGVzY3JpcHRpb246ICR7dGFzay5kZXNjfWAgOiB0YXNrRGVzYy50ZXh0Q29udGVudCA9ICdObyBEZXNjcmlwdGlvbi4nO1xuICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tET00ucXVlcnlTZWxlY3RvcignLnRhc2stZGF0ZScpO1xuICAgICAgICB0YXNrLmRhdGUgPyB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGAgQ29tcGxldGUgYnk6ICR7dGFzay5kYXRlfWAgOiB0YXNrRGF0ZS50ZXh0Q29udGVudCA9ICdObyBDb21wbGV0aW9uIERhdGUuJztcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tET00pO1xuICAgIH0pXG4gICAgXG59XG5cblxuY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gZGlyZWN0b3J5QXJyLmZpbmQobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZEZvbGRlcik7XG5cbiAgICBpZihzZWxlY3RlZExpc3QgPT0gbnVsbCkge1xuICAgICAgICBmb2xkZXJEaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9sZGVyRGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIGZvbGRlclRpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRMaXN0Lm5hbWU7XG4gICAgICAgIHJlbmRlclRhc2tOdW0oc2VsZWN0ZWRMaXN0KTtcbiAgICAgICAgY2xlYXJMaXN0KHRhc2tDb250YWluZXIpO1xuICAgICAgICByZW5kZXJUYXNrTGlzdChzZWxlY3RlZExpc3QpO1xuICAgIH1cbn1cblxuLy9ZT1UgV0VSRSBMQVNUIEhFUkUgV09SS0lORyBPTiBUSElTIE5FRUQgVE8gVE9HR0xFIENMQVNTIFRPIERJU1BMQVkgTU9EQUwgVE8gSU5QVVQgTkVXIFRBU0sqKioqKioqXG5jb25zdCBjcmVhdGVUYXNrTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpXG4gICAgbGlzdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5jb25zdCBzdWJtaXRGb3JtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGlzdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRhaW5lcicpXG4gICAgY29uc3QgdGFza0lucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJyk7XG4gICAgY29uc3QgdGFza0lucHV0RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRhc2tJbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza0lucHV0TmFtZS52YWx1ZTtcbiAgICBpZih0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09PSAnJykgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2tEZXNjID0gdGFza0lucHV0RGVzYy52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tJbnB1dERhdGUudmFsdWVcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEYXRlKTtcbiAgICB0YXNrSW5wdXROYW1lLnZhbHVlID0gbnVsbDtcbiAgICB0YXNrSW5wdXREZXNjLnZhbHVlID0gbnVsbDtcbiAgICB0YXNrSW5wdXREYXRlLnZhbHVlID0gbnVsbDtcbiAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkaXJlY3RvcnlBcnIuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkRm9sZGVyKTtcbiAgICBzZWxlY3RlZExpc3QudGFza3MucHVzaCh0YXNrKTtcbiAgICBsaXN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcmVuZGVyKCk7XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAodGFzaywgZGVzYywgZGF0ZSkgPT4ge1xuICAgIHJldHVybiB7ICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCBuYW1lOiB0YXNrLCBkZXNjOiBkZXNjLCBkYXRlOiBkYXRlLCBjb21wbGV0ZTogZmFsc2UsICB9XG59XG5cblxuZXhwb3J0IHsgcmVuZGVyVGFza3MsIGxpc3RMaXN0ZW5lcnMgfSIsImltcG9ydCB7IGNyZWF0ZUhUTUxFbGVtZW50LCByZW5kZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9saXN0LWNyZWF0b3JcIjtcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9ESVJfS0VZID0gJ3Rhc2subGlzdCc7XG5jb25zdCBMT0NBTF9TVE9SQUdFX0ZPTERFUl9LRVkgPSAndGFzay5zZWxlY3RlZEZvbGRlcic7XG5cbi8vbG9jYWwgc3RvcmFnZSBrZXlzICsgYXJyYXlcbmxldCBzZWxlY3RlZEZvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfRk9MREVSX0tFWSlcbmxldCBkaXJlY3RvcnlBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfRElSX0tFWSkpIHx8IFtdOyBcblxuY29uc3Qgc2F2ZUFuZFJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICAgIHJlbmRlckxpc3RzKCk7XG59XG5cbi8vc2F2ZXMgdG8gbG9jYWwgc3RvcmFnZVxuY29uc3Qgc2F2ZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0RJUl9LRVksIEpTT04uc3RyaW5naWZ5KGRpcmVjdG9yeUFycikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfRk9MREVSX0tFWSwgc2VsZWN0ZWRGb2xkZXIpO1xufVxuXG4vL3JlbmRlcnMgdGhlIGRpcmVjdG9yeSBsaXN0XG5jb25zdCByZW5kZXJMaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBkaXJlY3RvcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0b3J5Jyk7XG5cbiAgICBjbGVhckxpc3QoZGlyZWN0b3J5Q29udGFpbmVyKTtcbiAgICBkaXJlY3RvcnlBcnIuZm9yRWFjaChkaXJlY3RvcnkgPT4ge1xuICAgICAgIGNvbnN0IGRpcmVjdG9yeUZvbGRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KCdsaScsIG51bGwsIFsnZGlyZWN0b3J5LWZvbGRlciddLCBkaXJlY3RvcnkubmFtZSlcbiAgICAgICBkaXJlY3RvcnlGb2xkZXIuZGF0YXNldC5saXN0SWQgPSBkaXJlY3RvcnkuaWQ7XG4gICAgICAgLy9pZiB0aGUgZm9sZGVyIGlzIHNlbGVjdGVkLCBtYWtlIGl0IGFjdGl2ZSBmb2xkZXJcbiAgICAgICBpZihkaXJlY3RvcnkuaWQgPT09IHNlbGVjdGVkRm9sZGVyKSB7XG4gICAgICAgICAgIGRpcmVjdG9yeUZvbGRlci5jbGFzc0xpc3QuYWRkKCdkaXJlY3RvcnktYWN0aXZlJyk7XG4gICAgICAgfTtcbiAgICAgICBkaXJlY3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0b3J5Rm9sZGVyKTsgXG5cbiAgICAgICBjb25zdCBkaXJlY3RvcnlGb2xkZXJJY29ucyA9IGNyZWF0ZUhUTUxFbGVtZW50KCdzcGFuJywgbnVsbCwgWydkaXJlY3RvcnktZm9sZGVyLWljb25zJ10sIG51bGwpO1xuICAgICAgIGRpcmVjdG9yeUZvbGRlckljb25zLmlubmVySFRNTCA9ICc8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWVkaXRcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImljb24gaWNvbi1lZGl0XCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNNCAyMGg0bDEwLjUgLTEwLjVhMS41IDEuNSAwIDAgMCAtNCAtNGwtMTAuNSAxMC41djRcIiAvPjxsaW5lIHgxPVwiMTMuNVwiIHkxPVwiNi41XCIgeDI9XCIxNy41XCIgeTI9XCIxMC41XCIgLz48L3N2Zz48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXRyYXNoXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJpY29uIGljb24tdHJhc2hcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCI3XCIgeDI9XCIyMFwiIHkyPVwiN1wiIC8+PGxpbmUgeDE9XCIxMFwiIHkxPVwiMTFcIiB4Mj1cIjEwXCIgeTI9XCIxN1wiIC8+PGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiIC8+PHBhdGggZD1cIk01IDdsMSAxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDIgLTJsMSAtMTJcIiAvPjxwYXRoIGQ9XCJNOSA3di0zYTEgMSAwIDAgMSAxIC0xaDRhMSAxIDAgMCAxIDEgMXYzXCIgLz48L3N2Zz48L2J1dHRvbj4nO1xuICAgICAgIC8vaWYgdGhlIGZvbGRlciBpcyBzZWxlY3RlZCwgYWRkIHRoZSBpY29uc1xuICAgICAgIGlmKGRpcmVjdG9yeUZvbGRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2RpcmVjdG9yeS1hY3RpdmUnKSkge1xuICAgICAgIGRpcmVjdG9yeUZvbGRlci5hcHBlbmRDaGlsZChkaXJlY3RvcnlGb2xkZXJJY29ucyk7XG4gICAgICAgfTtcbiAgICB9KVxufTtcblxuLy9jbGVhcnMgdGhlIGRpcmVjdG9yeSBsaXN0IHRvIGJlIHJlLXJlbmRlcmVkIGluIHJlbmRlckxpc3RzXG5jb25zdCBjbGVhckxpc3QgPSAobGlzdCkgPT4ge1xuICAgIHdoaWxlKGxpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKGxpc3QuZmlyc3RDaGlsZClcbiAgICB9XG59O1xuXG4vL2FkZHMgZXZlbnRsaXN0ZW5lcnMgZm9yIHRoZSBkaXJlY3RvcnlcbmNvbnN0IGNyZWF0ZURpckxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWRpci1mb3JtJyk7XG4gICAgY29uc3QgZGlyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdG9yeScpO1xuXG4gICAgZGlyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjcmVhdGVEaXJlY3RvcnkpXG4gICAgZGlyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0ZWREaXJlY3RvcnlMaXN0ZW5lcilcbiAgICBkaXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVEaXIpXG4gICAgZGlyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdERpcilcbn1cblxuLy9jcmVhdGVzIGEgbmV3IGRpcmVjdG9yeSBmb2xkZXJcbmNvbnN0IGNyZWF0ZURpcmVjdG9yeSA9IChlKSA9PiB7XG4gICAgY29uc3QgZGlyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyLWJ0bi10ZXh0Jyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGlyTmFtZSA9IGRpclRleHQudmFsdWU7XG4gICAgaWYoZGlyTmFtZSA9PSBudWxsIHx8IGRpck5hbWUgPT09ICcnKSByZXR1cm47XG4gICAgY29uc3QgZGlyZWN0b3J5ID0gY3JlYXRlTmV3RGlyKGRpck5hbWUpO1xuICAgIGRpclRleHQudmFsdWUgPSBudWxsO1xuICAgIGRpcmVjdG9yeUFyci5wdXNoKGRpcmVjdG9yeSk7XG4gICAgc2F2ZUFuZFJlbmRlckxpc3QoKTtcbn1cblxuLy9mdW5jdGlvbiBmb3IgdGhlIHNlbGVjdGVkIGRpcmVjdG9yeSBsaXN0ZW5lclxuY29uc3Qgc2VsZWN0ZWREaXJlY3RvcnlMaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgaWYoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSB7XG4gICAgICAgIHNlbGVjdGVkRm9sZGVyID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgICAgIHNhdmVBbmRSZW5kZXJMaXN0KCk7XG4gICAgICAgIHJlbmRlclRhc2tzKCk7XG4gICAgfVxufVxuXG4vL2Z1bmN0aW9uIGZvciB0aGUgZGVsZXRlZGlyIGxpc3RlbmVyIFxuY29uc3QgZGVsZXRlRGlyID0gKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tdHJhc2gnKSAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9PT0gc2VsZWN0ZWRGb2xkZXIpIHtcbiAgICAgICAgZGlyZWN0b3J5QXJyID0gZGlyZWN0b3J5QXJyLmZpbHRlcihkaXJlY3RvcnkgPT4gZGlyZWN0b3J5LmlkICE9PSBzZWxlY3RlZEZvbGRlcik7XG4gICAgICAgIHNlbGVjdGVkRm9sZGVyID0gbnVsbDtcbiAgICAgICAgLy8gc2F2ZUFuZFJlbmRlckxpc3QoKTtcbiAgICAgICAgLy8gcmVuZGVyVGFza3MoKTtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgfVxufVxuLy9FZGl0aW5nIHRoZSBkaXJlY3RvcnkgZm9sZGVyIHRpdGxlIGFuZCB1cGRhdGluZyB0aGUgYXJyYXkgKyBET01cbmNvbnN0IGVkaXREaXIgPSAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1lZGl0JykgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5saXN0SWQgPT09IHNlbGVjdGVkRm9sZGVyKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdG9yeS1tb2RhbC1jb250YWluZXInKTtcbiAgICAgICAgZGlyZWN0b3J5TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGVkaXREaXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlyZWN0b3J5LWVkaXQtZm9ybScpO1xuICAgICAgICBjb25zdCBjbG9zZUVkaXREaXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi10YWJsZXItc3F1YXJlLXgnKTtcblxuICAgICAgICBjb25zdCBlZGl0RGlyRm9ybSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RvcnlNb2RhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1kaXInKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeVJlTmFtZSA9IGRpcmVjdG9yeU1vZGFsVGV4dC52YWx1ZTtcbiAgICAgICAgICAgIGlmKGRpcmVjdG9yeVJlTmFtZSA9PSBudWxsIHx8IGRpcmVjdG9yeVJlTmFtZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGRpcmVjdG9yeUFyci5mb3JFYWNoKGRpciA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGlyLmlkID09PSBzZWxlY3RlZEZvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICBkaXIubmFtZSA9IGRpcmVjdG9yeVJlTmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaXJlY3RvcnlNb2RhbFRleHQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgc2F2ZUFuZFJlbmRlckxpc3QoKTtcbiAgICAgICAgICAgIGRpcmVjdG9yeU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWRpdERpckJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlZGl0RGlyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbG9zZUVkaXREaXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBkaXJlY3RvcnlNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVkaXREaXJCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdERpckZvcm0pO1xuICAgICAgICAgICAgY2xvc2VFZGl0RGlyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VFZGl0RGlyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsb3NlRWRpdERpckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRWRpdERpcik7XG4gICAgICAgIGVkaXREaXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdERpckZvcm0pO1xuICAgIH1cbiAgICBcblxufVxuXG4vL2NyZWF0ZXMgYSBkaXJlY3RvcnkgZm9sZGVyIG9iamVjdCB0byBiZSBwdXNoZWQgaW50byBkaXJlY3RvcnkgYXJyYXlcbmNvbnN0IGNyZWF0ZU5ld0RpciA9IChkaXIpID0+IHtcbiAgIHJldHVybiB7IGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksIG5hbWU6IGRpciwgdGFza3M6IFtdIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyTGlzdHMsIGNyZWF0ZURpckxpc3RlbmVyLCBzYXZlQW5kUmVuZGVyTGlzdCwgZGlyZWN0b3J5QXJyLCBzZWxlY3RlZEZvbGRlciwgY2xlYXJMaXN0LCBzYXZlIH0iLCJpbXBvcnQgeyBjcmVhdGVEaXJMaXN0ZW5lciwgc2F2ZUFuZFJlbmRlckxpc3QsIHJlbmRlckxpc3RzLCBkaXJlY3RvcnlBcnIsIHNlbGVjdGVkRm9sZGVyIH0gZnJvbSBcIi4vZGlyZWN0b3J5LWNyZWF0b3JcIjtcbmltcG9ydCB7IHRvZ2dsZVRoZW1lIH0gZnJvbSBcIi4vdG9nZ2xlVGhlbWVcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tzLCBsaXN0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdC1jcmVhdG9yXCJcblxuZnVuY3Rpb24gY3JlYXRlSFRNTEVsZW1lbnQodHlwZSwgaWQsIGNsYXNzZXMsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gICAgaWYoY2xhc3Nlcykge1xuICAgICAgICBjbGFzc2VzLmZvckVhY2goKG15Q2xhc3MpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChteUNsYXNzKSk7XG4gICAgfTtcbiAgICBpZihjb250ZW50KSBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHNhdmVBbmRSZW5kZXJMaXN0KCk7XG4gICAgcmVuZGVyVGFza3MoKTtcbn1cblxuY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgIHRvZ2dsZVRoZW1lKCk7XG4gICAgcmVuZGVyKCk7XG4gICAgY3JlYXRlRGlyTGlzdGVuZXIoKTtcbiAgICBsaXN0TGlzdGVuZXJzKCk7IFxufVxuXG5vbkxvYWQoKTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVIVE1MRWxlbWVudCwgcmVuZGVyXG59IiwiY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG5cbmNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodC1kYXJrLW1vZGUnKTtcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1vZGUpO1xuXG5mdW5jdGlvbiB0b2dnbGVNb2RlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtdGhlbWUnKTtcblxuICAgIGlmKHRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7IFxuICAgICAgICBjdXJyZW50VGhlbWUudGV4dENvbnRlbnQgPSAnRGFyayBNb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VGhlbWUudGV4dENvbnRlbnQgPSAnTGlnaHQgTW9kZSc7XG4gICAgfTtcbn1cbn1cblxuZXhwb3J0IHsgdG9nZ2xlVGhlbWUgfSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImZvbGRlckRpc3BsYXlDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2xkZXJUaXRsZSIsInRhc2tDb3VudCIsInRhc2tDb250YWluZXIiLCJ0YXNrVGVtcGxhdGUiLCJyZW5kZXJUYXNrTnVtIiwic2VsZWN0ZWRUYXNrTnVtIiwiaW5jb21wbGV0ZSIsInRhc2tzIiwiZmlsdGVyIiwidGFzayIsImNvbXBsZXRlIiwibGVuZ3RoIiwidGFza3NTdHJpbmciLCJ0ZXh0Q29udGVudCIsInJlbmRlclRhc2tzIiwic2VsZWN0ZWRMaXN0IiwiZGlyZWN0b3J5QXJyIiwiZmluZCIsImxpc3QiLCJpZCIsInNlbGVjdGVkRm9sZGVyIiwic3R5bGUiLCJkaXNwbGF5IiwibmFtZSIsImNsZWFyTGlzdCIsImZvckVhY2giLCJ0YXNrRE9NIiwiaW1wb3J0Tm9kZSIsImNvbnRlbnQiLCJjaGVja0JveCIsImNoZWNrZWQiLCJ0YXNrRGVzYyIsImRlc2MiLCJ0YXNrRGF0ZSIsImRhdGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRhc2siLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJMT0NBTF9TVE9SQUdFX0RJUl9LRVkiLCJMT0NBTF9TVE9SQUdFX0ZPTERFUl9LRVkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2F2ZUFuZFJlbmRlckxpc3QiLCJzYXZlIiwicmVuZGVyTGlzdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGlyZWN0b3J5Q29udGFpbmVyIiwiZGlyZWN0b3J5IiwiZGlyZWN0b3J5Rm9sZGVyIiwiY3JlYXRlSFRNTEVsZW1lbnQiLCJkYXRhc2V0IiwibGlzdElkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlyZWN0b3J5Rm9sZGVySWNvbnMiLCJpbm5lckhUTUwiLCJjb250YWlucyIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZURpcmVjdG9yeSIsImUiLCJkaXJUZXh0IiwicHJldmVudERlZmF1bHQiLCJkaXJOYW1lIiwidmFsdWUiLCJjcmVhdGVOZXdEaXIiLCJwdXNoIiwic2VsZWN0ZWREaXJlY3RvcnlMaXN0ZW5lciIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImRlbGV0ZURpciIsInBhcmVudEVsZW1lbnQiLCJyZW5kZXIiLCJlZGl0RGlyIiwiZGlyZWN0b3J5TW9kYWwiLCJ0b2dnbGUiLCJlZGl0RGlyQnRuIiwiY2xvc2VFZGl0RGlyQnRuIiwiZWRpdERpckZvcm0iLCJkaXJlY3RvcnlNb2RhbFRleHQiLCJkaXJlY3RvcnlSZU5hbWUiLCJkaXIiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2VFZGl0RGlyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInR5cGUiLCJjbGFzc2VzIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJteUNsYXNzIiwiYm9keSIsImN1cnJlbnRUaGVtZSIsInRvZ2dsZVRoZW1lIiwiZGlyRm9ybSIsImRpckNvbnRhaW5lciIsImNyZWF0ZURpckxpc3RlbmVyIiwibGlzdE1vZGFsIiwidGFza0lucHV0TmFtZSIsInRhc2tJbnB1dERlc2MiLCJ0YXNrSW5wdXREYXRlIiwidGFza05hbWUiXSwic291cmNlUm9vdCI6IiJ9