import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function HtmlTables() {
    return (
        <React.Fragment>
            <Header />
            <div className="course_page">
                <div className='mrwhite' style={ htmlBorder }>
                    <Link to="/html-forms"><p className='mybtn' style={ htmlBtn }>Next</p></Link>
                    <Link to="/html-semantics"><p className='mybtn greenBtn' style={ htmlBtn }>Prev</p></Link>
                    <h1>1.3 | Tables and Images </h1>
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Tables </h4>
                    </div>
                    <div className='coursebody'>
                        <p>An HTML table is defined with the <code>&lt;table&gt;</code> tag. Normally tables consist of <u>rows</u> and <u>columns</u>.</p>
                        <p>Tables generally have head and body, defined by the <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> tags respectively. Inside these are the rows and columns.</p>
                        <p> Each table row is defined with the <code>&lt;tr&gt;</code> tag.</p>
                        <p> A block of table header cell or a single column in the row inside the <code>&lt;thead&gt;</code> of a table is defined with the <code>&lt;th&gt;</code> tag. By default, table headings are bold and centered.</p>
                        <p> A block of table data/cell in the <code>&lt;tbody&gt;</code> section of a table is defined with the <code>&lt;td&gt;</code> tag. The <code>&lt;td&gt;</code> elements are the data containers of the table. They can contain all sorts of HTML elements; text, images, lists, other tables, etc.</p>
                        <pre><code>&lt;table</code> style="width:100%"&gt;<br/>&lt;tr&gt;<br/>  &lt;th&gt;Firstname&lt;/th&gt;<br/>  &lt;th&gt;Lastname&lt;/th&gt;<br/>  &lt;th&gt;Age&lt;/th&gt;<br/>&lt;/tr&gt;<br/>&lt;tr&gt;<br/>  &lt;td&gt;Jill&lt;/td&gt;<br/>  &lt;td&gt;Smith&lt;/td&gt;<br/>  &lt;td&gt;50&lt;/td&gt;<br/>&lt;/tr&gt;<br/>&lt;tr&gt;<br/>  &lt;td&gt;Victor&lt;/td&gt;<br/>  &lt;td&gt;Chika&lt;/td&gt;<br/>  &lt;td&gt;509&lt;/td&gt;<br/>&lt;/tr&gt;<br/>&lt;/table&gt;</pre>
                        <p><strong>ADDING A BORDER</strong></p>
                        <p>If you do not specify a border for the table, it will be displayed without borders. A border is set using the CSS border property. Remember to define borders for both the table and the table cells.</p>
                        <pre>table, th, td <br/>    border: 1px solid black; <br />}</pre>
                        <p><strong>COLLAPSED BORDER</strong></p>
                        <p>If you want the borders to collapse into one border, add the CSS border-collapse property.</p>
                        <pre>table, th, td <br/>    border: 1px solid black;<br />    border-collapse: collapse;<br />}</pre>
                        <p><strong>ADDING CELL PADDING</strong></p>
                        <p>Cell padding specifies the space between the cell content and its borders. If you do not specify a padding, the table cells will be displayed without padding. To set the padding, use the CSS padding property.</p>
                        <pre>th, td <br/>    padding: 10px;<br />}</pre>
                        <p><strong>LEFT ALIGN HEADINGS</strong></p>
                        <p>By default, table headings are bold and centered. To left-align the table headings, use the CSS text-align property.</p>
                        <pre>th <br/>    text-align: left;<br />}</pre>
                    </div>                                        
                </div>
                
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Images</h4>
                    </div>
                    <div className='coursebody'>
                        <p>In HTML, images are defined with the <code>&lt;img&gt;</code> tag. The <code>&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag. The <code>src</code> attribute specifies the URL (web address) of the image:</p>
                        <pre>&lt;img <span style={green}>src</span>='url' <span style={green}>alt</span>='some_text' <span style={green}>style</span>='width: width; height:height;'&gt;</pre>
                        <p><strong>ALT ATTRIBUTE</strong></p>
                        <p>The alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</p>
                        <p>If a browser cannot find an image, it will display the value of the alt attribute. The alt attribute is required. A web page will not validate correctly without it. </p>
                        <pre>&lt;img <span style={green}>src</span>='devlogo.png' <span style={green}>alt</span>='Devamplify logo' <span style={green}>style</span>='width: auto; height:40px;'&gt;</pre>
                        <p><strong>IMAGE SIZE - WIDTH AND HEIGHT</strong></p>
                        <p>You can use the style attribute to specify the width and height of an image. The values are specified in pixels (use px after the value).</p>
                        <p>Alternatively, you can use the width and height attributes. Both the width, height, and style attributes are valid in HTML5. However, it is suggested on using the style attribute. It prevents internal or external styles sheets from changing the original size of images</p>
                        <p>Note: Always specify the width and height of an image. If width and height are not specified, the page will flicker while the image loads.</p>
                        <pre>&lt;img <span style={green}>src</span>='devlogo.png' <span style={green}>alt</span>='devamplify logo' <span style={green}>style</span>='width: 140px; height:40px;'&gt;</pre>
                        <p><strong>IMAGES IN ANOTHER FOLDER</strong></p>
                        <p>If not specified, the browser expects to find the image in the same folder as the web page. However, it is common to store images in a sub-folder. You must then include the folder name in the <code>src</code> attribute.</p>
                        <pre><code>&lt;img <span style={green}>src</span>='/devimages/devlogo.png' <span style={green}>alt</span>='devamplify logo' <span style={green}>style</span>='width:140px; height:40px;'&gt;</code></pre>
                        <p><strong>IMAGES ON ANOTHER SERVER </strong></p>
                        <p>Some web sites store their images on image servers. Actually, you can access images from any web address in the world.</p>
                        <pre><code>&lt;img <span style={green}>src</span>='http://www.slack.com/images/logo.png' <span style={green}>alt</span>='devamplify logo' <span style={green}>style</span>='width:140px; height:40px;'&gt;</code></pre>
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

export default HtmlTables;