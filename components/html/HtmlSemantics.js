import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function HtmlSemantics() {
    return (
        <React.Fragment>
            <Header />
            <div className="course_page">
                <div className='mrwhite' style={ htmlBorder }>
                    <Link to="/html-tables"><p className='mybtn' style={ htmlBtn }>Next</p></Link>
                    <Link to="/html-intro"><p className='mybtn greenBtn' style={ htmlBtn }>Prev</p></Link>
                    <h1>1.2 | Basics & Semantics of HTML5</h1>
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> The Head Element </h4>
                    </div>
                    <div className='coursebody'>
                        <p>The <code>&lt;head&gt;</code> element is just a container for all other head elements. It can also be said to be a container for metadata (that is, data about data) and is placed between the <code>&lt;html&gt;</code> tag and the <code>&lt;body&gt;</code> tag. It should be the first thing to appear after the opening <code>&lt;html&gt;</code> tag.</p>
                        <p>HTML metadata is data about the HTML document. Metadata is not displayed.</p>
                        <p>Metadata typically define the document title, character set, styles, links, scripts, and other meta information.</p>
                        <p>The following tags describe metadata: &lt;title&gt; &lt;style&gt; &lt;meta&gt; &lt;link&gt; &lt;script&gt; and &lt;base&gt;.</p>
                        <p> The <code>&lt;title&gt;</code> element indicating the title of the document. It defines a title in the browser tab, provides a title for the page when it is added to favorites and also displays a title for the page in search engine results.</p>
                        <p>The <code>&lt;base&gt;</code> element specifies the base URL and base target for all relative URLs in a page.</p>
                        <p>The <code>&lt;link&gt;</code> element is used to link to an external file, such as a style sheet or icon image.</p>
                        <p>The <code>&lt;style&gt;</code> element is used to add CSS rules inside the document. In other words, to define style information for a single HTML page.</p>
                        <p>The <code>&lt;script&gt;</code> element is used to add JavaScript inside the document.</p>
                        <p>The <code>&lt;meta&gt;</code> element includes information about the document such as character set, page description, keywords, author, and other metadata. These are particularly helpful for search applications.</p>
                        <pre>&lt;!DOCTYPE html&gt;<br /><code>&lt;html&gt;</code><br /><code>&lt;head&gt;</code><br /><code>&lt;title&gt;</code>The title of your web page <code>&lt;/title&gt;</code><br /><code>&lt;meta name='keywords' content='Devamplify, Progxap, Awka, Tech Hubs,'/&gt;</code><br /><code>&lt;meta name='description' content='welcome to devamplify space page where we are training it students'/&gt;</code><br /><code>&lt;meta name='author' content='Devamplify'/&gt;</code><br /><code>&lt;base href='https://devamplify.com'/&gt;</code><br /><code>&lt;link rel='stylesheet' type='text/css' href='css/itstudents.css'/&gt;</code><br /><code>&lt;script src='js/itstudents.js' type='text/javascript'/&gt;</code><br /><code>&lt;/head&gt;</code><br /><code>&lt;body&gt;</code><br /><code>&lt;h1&gt; Welcome User, This is your first major heading in HTML &lt;/h1&gt;</code><br /><code>&lt;p&gt; Dear User, consider this your first paragragh &lt;/p&gt;</code><br /><code>&lt;/body&gt;</code><br /><code>&lt;/html&gt;</code></pre>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> Block and Inline Elements </h4>
                    </div>
                    <div className='coursebody'>
                        <p>This is probably the most important thing you will learn about HTML elements, that some elements are BLOCK and some are INLINE. Now what exactly is block and inline elements.</p>
                        <p>Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.</p>
                        <p>A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can), like its a <u>BLOCK</u>.</p>
                        <code style={ blockElement }>The &lt;div&gt; element is a block-level element.</code>
                        <p>A block element will not allow another element to stay by its side, even if there is space yet unoccupied by the content of the element. </p>
                        <p>On the other hand, an inline element does not start on a new line but rather only takes up as much width as necessary, that is, as much width as the content of the element occupies.</p>
                        <p>This is <code style={ inlineElement }>an inline &lt;span&gt; element inside</code> a paragragh.</p>
                        <p>This simply means we can put an inline element inside a block element, but not the other way round. Understanding this will help you a lot in positioning elements while creating a website. </p>
                        <p>So, in creating a website, and you are about to use an element always have in mind what type of element it is by default. And secondly, if that default display will support how you want to use the element. If it won't, you have to change its display using the CSS display property, and set its value to what you want. Like you can change an element's display from block to inline and it will start behaving like an inline element and vice versa. Its all up to you and what you want to design.</p>   
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Headings </h4>
                    </div>
                    <div className='coursebody'>
                        <p>Headings are important in HTML documents. Browsers automatically add some white space (a margin) before and after a heading. You can remove this by using CSS to remove all default margins and paddings from all elements. More on that in the CSS Course.</p>
                        <p>Headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>
                        <p>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.</p>
                        <pre>&lt;h1&gt; This is heading 1 &lt;/h1&gt;<br />&lt;h2&gt; This is heading 2 &lt;/h2&gt;<br />&lt;h3&gt; This is heading 3 &lt;/h3&gt;<br />&lt;h4&gt; This is heading 4 &lt;/h4&gt;<br />&lt;h5&gt; This is heading 5 &lt;/h5&gt;<br />&lt;h6&gt; This is heading 6 &lt;/h6&gt;</pre>
                        <p>Headings are important for the following reasons.</p>
                        <p>1. Search engines use the headings to index the structure and content of your web pages.<br />2. Users skim your pages by its headings. It is important to use headings to show the document structure.</p>
                        <p>&lt;h1&gt; headings should be used for main headings, followed by &lt;h2&gt; headings, then the less important &lt;h3&gt;, and so on.</p>
                        <p> <u>Use HTML headings for headings only. Don't use headings to make text <big>BIG</big> or <b>bold</b>.</u></p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML5 Elements/Semantics </h4>
                    </div>
                    <div className='coursebody'>
                        <p><strong>What is Semantics?</strong></p>
                        <p>Semantics is the study of the meanings of words and phrases in a language. Semantic elements = elements with a meaning. A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements:</p>
                        <pre> &lt;div&gt; and &lt;span&gt; - Tells nothing about its content.</pre>
                        <p>Examples of semantic elements:</p>
                        <pre> &lt;form&gt; &lt;table&gt; and &lt;article&gt; - Clearly defines its content.</pre>
                        <p><strong>HTML Semantics</strong></p>
                        <p>New elements were added to HTML in the HTML5 version. The HTML5 semantic elements are supported in all modern browsers.  HTML5 offers new elements for better document structure. </p>
                        <p><strong>New Semantic/Structural Elements</strong></p>
                        <p>All these are block-level elements: article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time. </p>
                        <p><strong>New Form Elements</strong></p>
                        <p>datalist, keygen, output</p>
                        <p><strong>New Input Types</strong></p>
                        <p>color, date, datetime, datetime-local, email, month, number, range, search, tel, time, url, week</p>
                        <p><strong>New Input Attributes</strong></p>
                        <p>autocomplete, autofocus, form, formaction, formenctype, formmethod, formnovalidate, formtarget,height and width, list, min and max, multiple, pattern (regexp), placeholder, required, step</p>
                        <p><strong>New Attribute Syntax</strong></p>
                        <p>HTML5 allows four different syntaxes for attributes. In HTML5, all four syntaxes may be used, depending on what is needed for the attribute.</p>
                        <p>The following four examples demonstrates the different syntaxes using an &lt;input&gt; tag:</p>
                        <pre>Empty         &lt;input type=\"text\" value=\"John\" <b>disabled</b>&gt;<br />Unquoted       &lt;input type=\"text\" value=<b>John</b>&gt;<br />Double-quoted   &lt;input type=\"text\" value=<b>\"John\"</b>&gt;<br />Single-quoted    &lt;input type=\"text\" value=<b>'John'</b>&gt;</pre>
                        <p><strong>New Media Elements</strong></p>
                        <p>audio, embed, source, track, video</p>
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
const blockElement = {
    padding: '5px 10px',
    border: '1px solid #009933',
    display:'block', 
    borderRadius: '0',
    marginBottom:'10px'
}
const inlineElement = {
    padding: '5px 10px',
    border: '1px solid #009933',
    display:'inline', 
    borderRadius: '0'
}

export default HtmlSemantics;