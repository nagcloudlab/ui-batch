


// Clock component

const template=document.createElement('template');
template.innerHTML=`
    <style>
        .card{
            width:100px;
            height:100px;
            padding:10px;
            margin:3px;
            border:1px solid red;
        }
        .card-header{
            background-color:#DEF;
        }
    </style>

    <div class="card">
        <div class="card-header">Asia/Kolkata</div>
        <div class="card-body">
            <span class="badge bg-primary" id="time-span"></span>
        </div>
    </div>

`
class XClock extends HTMLElement{
    static get observedAttributes() {
        return ['value']
    }
    constructor(){
        console.log("X-clock constructor");
        super();
        this._value="Asia/Kolkata";
        this.root = this.attachShadow({ mode: 'closed' })
        this.root.appendChild(template.content.cloneNode(true))

        this.timeSpan=this.root.querySelector('#time-span');
        setInterval(() => {
            console.log('tick')
            this.timeSpan.innerText=new Date().toLocaleTimeString('en-US',{timeZone:this._value})
        }, 1000);
    }
    set value(value) {
        this._value=value
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'value') {
            this._value = newValue
        }
    }
}
customElements.define('my-clock',XClock)