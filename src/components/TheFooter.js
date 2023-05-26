import { Component } from "../core/core"

export default class TheFooter extends Component{
    constructor(){
        super({
            tagName: 'footer'
        })
    }
    render(){
        this.el.innerHTML = /*html*/ `
        <div>
            <a href="https://github.com/webseed87/Movie-APP.git">GitHub Repository</a>
        </div>
        <div>
            <a href="http://webseed.cafe24.com/">
                ${new Date().getFullYear()}
                WEBSEED
    </a>
    </div>   
        
        `
    }
}