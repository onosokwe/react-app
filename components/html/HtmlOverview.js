import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function HtmlOverview() {
    return (
        <React.Fragment>
            <Header />
            <div className="course_page">
                <div className='mrwhite' style={ htmlBorder }>
                    <Link to="/html-intro"><p className='mybtn' style={ htmlBtn }>Next</p></Link>
                    <h1>Basics of HTML5</h1>
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4>Overview</h4>
                    </div>
                    <div className='coursebody'>
                        <p>HTML is the language that powers the web. And like any other language, once you master it, you can begin to create your own content, whether that's simple websites or complex web applications.</p>
                        <p> This course provides an in-depth look at the essentials: the syntax of HTML and best practices for writing and editing your code. We will review the structure of a typical HTML document, and show how to section pages and format your content with HTML.</p>
                        <p>HTML stands for Hyper Text Markup Language. It is the standard markup language and the most widely used language to create web pages. As its name suggests, HTML is a markup language.</p>
                        <p>Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers.</p>
                        <p>HTML is not a programming language, it is a markup language. All you need to do to use HTML is to learn what type of markup to use to get the results you want.</p>
                        <p> It is important you are familiar with the following to get a better understanding of how HTML and web development works.</p>
                        <p><ul><li>Basic word processing using any text editor, like Notepad.</li><li>How to create directories and files. You need this in linking up your files together.</li><li>How to navigate through different directories.</li><li>Basic understanding of internet browsing using a browser like Chrome or Firefox etc.</li></ul></p>
                        <p>The purpose of a web browser (Chrome, IE, Firefox, Safari) is to read HTML documents and display them. The browser does not display the HTML tags, but uses them to determine how to display the document.</p>
                    </div>                                        
                </div>                
            </div>
        </React.Fragment>
    )
}

const htmlBorder = {
    borderBottom: '4px solid #f16529'
}
const htmlBtn = {
    background: '#f16529',
    color:'#fff',
    border: '1px solid #f16529'
}

export default HtmlOverview;