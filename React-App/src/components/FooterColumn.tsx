import { Link } from 'react-router-dom';
import './FooterColumn.css'
import '../index.css'


interface FooterLink {
    title: string,
    type: string
}

interface FooterLinkList {
    title: string
    theme: string
    list: FooterLink[]
}


export default function FooterColumn (props: FooterLinkList){
    return (
        <>
        <h2 className='heading'>{props.title}</h2>
        <ul>{props.list.map((item, index)=>{
            return (
                <li className='footer-columnlist' key={index} data-theme = {props.theme}>
            <a href={`#${item.title}`}>{item.title}</a>
          </li>
            )
        })}
        </ul>
        </>
    )
}