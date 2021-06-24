import React, { useState } from 'react'
import PortfolioList from '../Portfolio List/PortfolioList'
import './portfolio.scss'
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";
import { useEffect } from 'react';
export default function Portfolio() {
    const [select, setSelect] = useState('featured')
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ]

    useEffect(() => {
        switch (select) {
            case 'featured':
                setData(featuredPortfolio)
                break
            case 'web':
                setData(webPortfolio)
                break
            case 'mobile':
                setData(mobilePortfolio)
                break
            case 'design':
                setData(designPortfolio)
                break
            case 'content':
                setData(contentPortfolio)
                break
            default:
                setData(featuredPortfolio)
        }
    }, [select])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(i => (<PortfolioList title={i.title} active={select === i.id} setSelect={setSelect} id={i.id} />))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
