import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function HtmlIntro() {
    return (
        <React.Fragment>
            <Header />
            <div className="course_page">
                <div className='mrwhite' style={ htmlBorder }>
                    <Link to="/html-semantics"><p className='mybtn' style={ htmlBtn }>Next</p></Link>
                    <Link to="/html"><p className='mybtn greenBtn' style={ htmlBtn }>Prev</p></Link>
                    <h1>1.1 | Introduction to HTML</h1>
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> WHAT IS HTML?</h4>
                    </div>
                    <div className='coursebody'>
                        <p><strong>Hypertext</strong> refers to the way in which web pages (HTML documents) are linked together. When you click a link in a web page, you are using hypertext.</p>
                        <p><strong>Markup Language</strong> describes how HTML works. With a markup language, you simply 'mark up' a text document with tags that tell a Web browser how to structure it to display.</p>
                        <p>HTML describes the structure of Web pages using markup.</p>
                        <p>HTML elements are the building blocks of HTML pages.</p>
                        <p>HTML elements are represented by tags.</p>
                        <p>HTML tags are element names surrounded by angle brackets.</p>
                        <p><pre>&lt;tagname&gt; your element content will be written here &lt;/tagname&gt;</pre></p>
                        <p>HTML tags label pieces of content such as 'heading', 'paragraph', 'table', and so on.</p>
                        <p>Browsers do not display the HTML tags, but use them to render the content of the page.</p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> DOCTYPE DECLARATION</h4>
                    </div>
                    <div className='coursebody'>
                        <p>The <code>&lt;!DOCTYPE&gt;</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
                        <p> It must only appear once, at the top of the page (before any HTML tags).</p>
                        <p> The <code>&lt;!DOCTYPE&gt;</code> declaration is not case sensitive. The <code>&lt;!DOCTYPE&gt;</code> declaration for HTML5 is:</p>
                        <pre>&lt;&#33;DOCTYPE html&gt;</pre>
                        <p>All HTML documents must start with a document type declaration: <code>&lt;!DOCTYPE html&gt;</code></p>
                        <p>The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code></p>
                        <p>The visible part of the HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code></p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML TAGS AND ELEMENTS </h4>
                    </div>
                    <div className='coursebody'>
                        <p>An HTML element usually consists of a <u>start tag</u> and <u>end tag</u>, with the content inserted in between:</p>
                        <p><pre>&lt;tagname&gt; your element content will be written here &lt;/tagname&gt;</pre></p>
                        <p>The HTML element is everything from the <strong>start tag </strong> also called <u>opening tag</u> to the <u>end tag</u> also called  <strong>closing tag</strong>.</p>
                        <p>Below is an example of a START TAG:</p>
                        <pre>&lt;html&gt;</pre>
                        <p>This is an example of a CLOSING TAG:</p>
                        <p><pre>&lt;/html&gt;</pre></p>
                        <p><strong>EMPTY ELEMENTS: </strong> HTML elements with no content are called empty elements. <u>Empty elements also do not have an end tag</u>, such as the <code>&lt;br&gt;</code> element (which indicates a line break), or the <code>&lt;hr&gt;</code> which draws a straight line, or the <code>&lt;link&gt;</code> tag for inserting css into html documents. Empty elements can be 'closed' in the opening tag like this: <code>&lt;br /&gt;</code></p>
                        <p>HTML5 does not require empty elements to be closed with the slash in the opening tag. But if you want stricter validation, or if you need to make your document readable by XML parsers, you must close all HTML elements properly.</p>
                        <p><strong>NESTED ELEMENTS: </strong> HTML elements can be nested (that is, elements containing elements). All HTML documents actually consist of nested HTML elements.</p>
                        <p> This example below contains several HTML elements: the <code>&lt;html&gt;</code> element which defines the whole document as a HTML document; the <code>&lt;body&gt;</code> element which is the content of the HTML document; the <code>&lt;h1&gt;</code> which is the heading of the document, and its also nested in the &lt;body&gt; element; the paragragh tag <code>&lt;p&gt;</code> which is nested in the &lt;body&gt; element just like the heading element &lt;h1&gt;.</p>
                        <pre>&lt;!DOCTYPE html&gt;<br />&lt;html&gt;<br />   &lt;body&gt;<br />       &lt;h1&gt; THIS IS HEADING &lt;/h1&gt;<br />       &lt;p&gt; This is our first paragragh in HTML. Yippee! &lt;/p&gt;<br />   &lt;/body&gt;<br />&lt;/html&gt;</pre>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML COMMENTS</h4>
                    </div>
                    <div className='coursebody'>
                        <p>Comment tags are used to insert comments in the HTML source code.</p>
                        <p><pre>&lt;&#33;-- your comments here --&gt;</pre></p>
                        <p>Comments are pieces of code which is ignored by any web browser. It is good practice to comment your code, especially in complex documents, to indicate sections of a document, and any other notes to anyone looking at the code. Comments help you and others understand your code.</p>
                        <p>HTML Comment lines are indicated by the special beginning tag <code>&lt;!--</code> and ending tag <code>--&gt;</code> placed at the beginning and end of EVERY line to be treated as a comment.</p>
                        <p>Comments do not nest (that is, you cannot nest a comment inside another comment), and the double-dash sequence <code>'--'</code> may not appear inside a comment except as part of the closing <code>--&gt;</code> tag. You must also make sure that there are no spaces in the start tag of the comment string.</p>
                        <p>For example: The line below is a valid comment in HTML</p>
                        <p><pre>&lt;!-- This is a VALID comment --&gt;</pre></p>
                        <p>But following line is not a valid comment and will be displayed by the borwser. This is because there is a space between the left angle bracket and the exclamation mark.</p>
                        <pre>&lt; !-- This is a INVALID comment --&gt;</pre>
                    </div>                                        
                </div>       
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML ATTRIBUTES </h4>
                    </div>
                    <div className='coursebody'>
                        <p> Attributes provide additional information about HTML elements. All HTML elements can have attributes. An attribute is used to define the characteristics of an element and is placed inside the element's opening tag.</p>
                        <p> All attributes are made up of two parts: a <u>name</u> and a <u>value</u>. Attributes usually come in name/value pairs like: <code>name='value'</code>.</p>
                        <p> Attributes provide additional information about an element.</p>
                        <p>Lets look at some commonly used attributes in HTML.</p>

                        <p><strong>GROUP 1: Global attributes</strong></p>
                        <p>Global attributes can be used on ALL HTML elements. They are below highlighted in green.</p>
                        <pre><code>&lt;div <span style={green}>class=''</span>&gt; Specifies one or more classnames for an element (refers to a class in a style sheet) &lt;/div&gt; <br />&lt;div <span style={green}>hidden=''</span>&gt; Specifies that an element is not yet, or is no longer, relevant &lt;/div&gt;<br />&lt;div <span style={green}>id=''</span>&gt; Specifies a unique id for an element &lt;/div&gt;<br />&lt;div <span style={green}>lang=''</span>&gt; Specifies the language of the element's content &lt;/div&gt;<br />&lt;div <span style={green}>spellcheck=''</span>&gt; Specifies whether the element is to have its spelling and grammar checked or not &lt;/div&gt;<br />&lt;div <span style={green}>style=''</span>&gt; Specifies an inline CSS style for an element &lt;/div&gt;<br />&lt;div <span style={green}>tabindex=''</span>&gt; Specifies the tabbing order of an element &lt;/div&gt;<br />&lt;div <span style={green}>title=''</span>&gt; Specifies extra information about an element &lt;/div&gt;<br />&lt;div <span style={green}>translate=''</span>&gt; Specifies whether the content of an element should be translated or not &lt;/div&gt;</code></pre>
                        <p><strong>GROUP 2: Other attributes</strong></p>
                        <p>They apply only to elements that they belong to. Below is the list of <u>some</u> HTML attribute arranged alphabetically.</p>                        
                        <table>
                            <tr>
                                <th>Attribute</th>
                                <th>Belongs to </th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>alt</td>
                                <td>&lt;area&gt; &lt;img&gt; &lt;input&gt;</td>
                                <td>Specifies an alternate text when the original element fails to display</td>
                            </tr>
                            <tr>
                                <td>charset</td>
                                <td>&lt;meta&gt; &lt;script&gt; </td>
                                <td>Specifies the character encoding</td>
                            </tr>
                            <tr>
                                <td>checked</td>
                                <td>&lt;input&gt;</td>
                                <td>Specifies that an &lt;input&gt; element should be pre-selected when the page loads (for type='checkbox' or type='radio')</td>
                            </tr>
                        </table>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> BASIC PAGE STRUCTURE </h4>
                    </div>
                    <div className='coursebody'>
                        <p>To begin coding HTML you need only two things: a simple-text editor and a web browser. Notepad is the most basic of simple-text editors and you will probably code a fair amount of HTML with it. To start, you can open your Notepad and when through save the file as dot html. Follow the steps below.</p>
                        <pre>&lt;!DOCTYPE html&gt;<br />&lt;html&gt;<br />   &lt;head&gt;<br />       &lt;title&gt;The title of your web page &lt;/title&gt;<br />   &lt;/head&gt;<br />   &lt;body&gt;<br />  <br />   &lt;/body&gt;<br />&lt;/html&gt;</pre>
                        <p> Only the content inside the <code>&lt;body&gt;</code> section is displayed in a browser.</p>
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
const green = {
    color:'#009933',
}

export default HtmlIntro;