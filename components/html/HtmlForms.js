import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function HtmlForms() {
    return (
        <React.Fragment>
            <Header />
            <div className="course_page">
                <div className='mrwhite' style={ htmlBorder }>
                    <Link to="/html-media"><p className='mybtn' style={ htmlBtn }>Next</p></Link>
                    <Link to="/html-tables"><p className='mybtn greenBtn' style={ htmlBtn }>Prev</p></Link>
                    <h1>1.4 | Form Elements</h1>
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> The HTML Form Element </h4>
                    </div>
                    <div className='coursebody'>
                        <p>The HTML <span style={red}>&lt;form&gt;</span> element defines a form that is used to collect user input. An HTML form comprises the opening tag and closing tag, and form elements within them. We will look at HTML form elements shortly. But lets us look at HTML form attributes first. Look at the form below:</p>
                        <p><pre><span style={red}>&lt;form</span> <span style={green}>action</span><span style={red}>=''</span> <span style={green}>method</span><span style={red}>='post'</span>&gt;<br/><br/><i>form elements are here</i><br/><br/><span style={red}>&lt;/form&gt;</span></pre></p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Form Attributes </h4>
                    </div>
                    <div className='coursebody'>
                        <p>The most commonly used form attributes are these.</p>
                        <p><ul type='A'>
                            <li><strong>Method attribute:</strong> This could be set to either get or post. This attribute specifies the HTTP method (GET or POST) to use when sending form-data. The default method when submitting form data is GET. However, when GET is used, the submitted form data will be visible in the page address field.<br/><strong>GET:</strong> GET must NOT be used when sending sensitive information! GET is best suited for short, non-sensitive, amounts of data, because it has size limitations too.<br/><strong>POST:</strong> Always use POST if the form data contains sensitive or personal information. The POST method does not display the submitted form data in the page address field. POST has no size limitations, and can be used to send large amounts of data.</li>
                            <li><strong>Action attribute:</strong> This is set to a <em>url</em>. Specifies where to send the form-data when a form is submitted. If empty it means the form is submitted to same file where the form exists.</li>
                            <li><strong>Enctype attribute:</strong> Specifies how the form-data should be encoded when submitting it to the server (only for method='post'). This must be specified if you are receiving a file or image from the input elements.</li>
                            </ul>
                        </p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Form Elements </h4>
                    </div>
                    <div className='coursebody'>
                        <p>An HTML form usually contains form elements. Form elements are different types of input elements, like text fields, checkboxes, radio buttons, submit buttons, and more. The form elements usually are in consonance with the different types of data we want to collect from the user. Here is a list of the most commonly used HTML form elements.</p>
                        <p><ul>
                        <li><u>Input element:</u> It is used to define an input control. The most important form element is the <span style={red}>&lt;input&gt;</span> element. The <span style={red}>&lt;input&gt;</span> element can be displayed in several ways, depending on the type attribute. We will look at input element in detail further down this study. It is a very important element to study and really grasp a hold of. But for now just know that if the 'type' attribute is omitted, the input field gets the default type of 'text'. The <span style={red}>&lt;input&gt;</span> element is empty (meaning it does not have a closing tag), and it contains attributes only.</li>
                        <pre><code>&lt;input type='text' name='' /&gt;</code></pre>
                        <li><u>Textarea element:</u> The <span style={red}>&lt;textarea&gt;</span> element defines a multi-line input field (more like a text area). The 'rows' attribute specifies the visible number of lines in a text area. The 'cols' attribute specifies the visible width of a text area.</li>
                        <pre><code>&lt;textarea cols='30' row='10'&gt;&lt;/textarea&gt;</code></pre>
                        <li><u>Label element:</u> The <span style={red}>&lt;label&gt;</span> element defines a label for a <span style={red}>&lt;form&gt;</span> element. </li>
                        <pre><code>&lt;label&gt;Enter your email&lt;/label&gt;</code></pre>
                        <li><u>Select element:</u> The <span style={red}>&lt;select&gt;</span> element defines a drop-down list. It is mostly used with the <span style={red}>&lt;option&gt;</span> element.</li>
                        <pre><code>&lt;select&gt;<br/>   &lt;option value='volvo'&gt;Volvo&lt;/option&gt;<br/>   &lt;option value='saab'&gt;Saab&lt;/option&gt;<br/>   &lt;option value='opel'&gt;Opel&lt;/option&gt;<br/>   &lt;option value='audi'&gt;Audi&lt;/option&gt;<br/>&lt;/select&gt;</code></pre>
                        <li><u>Option element:</u> Mostly used along with the select element as a nested element, it defines an option that can be selected. By default the first item in the dropdown is selected. To define a preselected option, add the <span style={red}>&lt;selected&gt;</span> attribute to the option. To allow the user to select more than one option, add the <span style={red}>&lt;multiple&gt;</span> attribute.</li>
                        <li><u>Button element:</u> The <span style={red}>&lt;button&gt;</span> element defines a clickable button. Inside a <code>button</code> element you can put content, like text or images. This is the difference between this element and buttons created with the <code>input</code> element. Remember that you should always specify the 'type' attribute for the button element. Different browsers may use different default types for the button element.</li>
                        </ul> </p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Input Types </h4>
                    </div>
                    <div className='coursebody'>
                        <p>Here is a list of the most commonly used HTML input 'type' attribute: text, email (HTML5), password, submit, reset, radio, checkbox, button. Others are file, image, hidden, number, search, tel, time, month, date, color, etc. </p>
                        <p><strong>1. INPUT TYPE TEXT </strong></p>
                        <p><span style={red}>&lt;input type='text'&gt;</span> defines a one-line text input field: </p>
                        <p><strong>2. INPUT TYPE EMAIL</strong></p>
                        <p><span style={red}>&lt;input type='email'&gt;</span> defines an email field. The browser will require that one adds an at symbol after the email id when you use an input type of 'email'.</p>
                        <p><strong>2. INPUT TYPE PASSWORD</strong></p>
                        <p><span style={red}>&lt;input type='password'&gt;</span> defines a password field. The characters in a password field are masked (shown as asterisks or circles).</p>
                        <p><strong>3. INPUT TYPE SUBMIT</strong></p>
                        <p><span style={red}>&lt;input type='submit'&gt;</span> defines a button for submitting form data to a form-handler. The form-handler is typically a server page with a script for processing input data. The form-handler is specified in the form's 'action' attribute. If you omit the submit button's 'value' attribute, the button will get a default text of 'Submit Query'.</p>
                        <p><strong>4. INPUT TYPE RESET</strong></p>
                        <p><span style={red}>&lt;input type='reset'&gt;</span> defines a reset button that will reset all form values to their default values. If you change the input values and then click the 'Reset' button, the form-data will be reset to the default values.</p>
                        <p><strong>5. INPUT TYPE RADIO</strong></p>
                        <p><span style={red}>&lt;input type='radio'&gt;</span>  defines a radio button. Radio buttons let a user select ONLY ONE of a limited number of choices.</p>
                        <p><strong>6. INPUT TYPE CHECKBOX</strong></p>
                        <p><span style={red}>&lt;input type='checkbox'&gt;</span> defines a checkbox. Checkboxes let a user select ZERO or MORE options of a limited number of choices.</p>
                        <p><strong>7. INPUT TYPE BUTTON</strong></p>
                        <p><span style={red}>&lt;input type='button'&gt;</span> defines a button.</p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML Input Attributes </h4>
                    </div>
                    <div className='coursebody'>
                        <p>The <code>input</code> element is empty, it contains attributes only. The 'align' attribute is not supported in HTML5. In HTML5, the <code>input</code> tag has several new attributes, and the type attribute has several new values.</p>
                        <p><strong><em>name:</em></strong> The name attribute specifies the initial value for an input field.</p>
                        <p><strong><em>height and width:</em></strong> The height and width attributes specify the height and width of an <code>&lt;input type='image'&gt;</code> element. Always specify the size of images. If the browser does not know the size, the page will flicker while images load.</p>
                        <p><strong><em>src:</em></strong> Used for defining an image as the submit button, with height and width attributes.</p>
                        <p><strong><em>min and max:</em></strong> The min and max attributes specify the minimum and maximum values for an &lt;input&gt; element. The min and max attributes work with the following input types: number, range, date, datetime-local, month, time and week.</p>
                        <p><strong><em>placeholder:</em></strong> The placeholder attribute specifies a hint that describes the expected value of an input field (a sample value or a short description of the format). The hint is displayed in the input field before the user enters a value. The placeholder attribute works with the following input types: text, search, url, tel, email, and password.</p>
                        <p><strong><em>value:</em></strong> The value attribute specifies the initial value for an input field</p>
                        <p><strong><em>disabled:</em></strong> The disabled attribute specifies that the input field is disabled. A disabled input field is unusable and un-clickable, and its value will not be sent when submitting the form.</p>
                        <p><strong><em>size:</em></strong> The size attribute specifies the width size (in characters) for the input field. </p>
                        <p><strong><em>maxlength:</em></strong> The maxlength attribute specifies the maximum allowed length for the input field. Take an instance where you don't want the user to type anything more than 100 characters, you set the size to 100 and the number of allowed characters will be 100. The maxlength attribute does not provide any feedback. If you want to alert the user, you must write JavaScript code. Input restrictions are not foolproof, and JavaScript provides many ways to add illegal input. To safely restrict input, it must be checked by the receiver (the server) as well! </p>
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
const red = {
    color:'red',
}
const green = {
    color:'#009933',
}

export default HtmlForms;