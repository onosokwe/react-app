import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function HtmlMedia() {
    return (
        <React.Fragment>
            <Header />
            <div className="course_page">
                <div className='mrwhite' style={ htmlBorder }>
                    {/* <Link to="/html-test"><p className='mybtn' style={ htmlBtn }>Test</p></Link> */}
                    <Link to="/html-forms"><p className='mybtn greenBtn' style={ htmlBtn }>Prev</p></Link>
                    <h1>1.5 | HTML Media</h1>
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4>  HTML Multimedia </h4>
                    </div>
                    <div className='coursebody'>
                        <p>Multimedia on the web is sound, music, videos, movies, and animations. Multimedia comes in many different formats. It can be almost anything you can hear or see. Examples: Images, music, sound, videos, records, films, animations, and more. Web pages often contain multimedia elements of different types and formats..</p>
                        <p><strong>BROWSER SUPPORT</strong></p>
                        <p>The first web browsers had support for text only, limited to a single font in a single color. Later came browsers with support for colors and fonts, and images! Audio, video, and animation have been handled differently by the major browsers. Different formats have been supported, and some formats require extra helper programs (plug-ins) to work. Hopefully this will become history. HTML5 multimedia promises an easier future for multimedia.</p>
                        <p><strong>FORMATS</strong></p>
                        <p>Multimedia elements (like audio or video) are stored in media files. The most common way to discover the type of a file, is to look at the file extension. Multimedia files have formats and different extensions like: .swf, .wav, .mp3, .mp4, .mpg, .wmv, and .avi.</p>
                        <p>MP4 is the new and upcoming format for internet video. MP4 is recommended by YouTube. MP4 is supported by Flash Players. MP4 is supported by HTML5.</p>
                        <p></p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> Html Audio Element </h4>
                    </div>
                    <div className='coursebody'>
                        <p>Before HTML5, audio files could only be played in a browser with a plug-in (like flash). The HTML5 <code>audio</code> element specifies a standard way to embed audio in a web page. To play an audio file in HTML, use the <code>audio</code> element.</p>
                        <pre>&lt;audio controls&gt;<br/>    &lt;source <span style={green}>src=</span>'horse.ogg' <span style={green}>type=</span>'audio/ogg'&gt;<br/>    &lt;source <span style={green}>src=</span>'horse.mp3' <span style={green}>type=</span>'audio/mpeg'&gt;<br/>&lt;/audio&gt;</pre>
                        <p><strong>HOW IT WORKS</strong></p>
                        <p>The <code>controls</code> attribute adds audio controls, like play, pause, and volume.</p>
                        <p>The <code>source</code> element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format.</p>
                        <p>The text between the <code>&lt;audio&gt;</code> and <code>&lt;/audio&gt;</code> tags will only be displayed in browsers that do not support the <code>&lt;audio&gt;</code> element.</p>
                        <p><strong>AUDIO ATTRIBUTES</strong></p>
                        <p>autoplay, controls, loop, muted, preload, src.</p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> Html Video Element </h4>
                    </div>
                    <div className='coursebody'>
                        <p>Before HTML5, a video could only be played in a browser with a plug-in (like flash). The HTML5 <code>video</code> element specifies a standard way to embed a video in a web page.</p>
                        <pre>&lt;video <span style={green}>width=</span>'320' <span style={green}>height=</span>'240' controls&gt;<br/>    &lt;source <span style={green}>src=</span>'video.mp4' <span style={green}>type=</span>'video/mp4'&gt;<br/>    &lt;source <span style={green}>src=</span>'video.ogg'   <span style={green}>type=</span>'video/ogg'&gt;<br/>    Your browser does not support the video tag.<br/>&lt;/video&gt;</pre>
                        <p><strong>HOW IT WORKS</strong></p>
                        <p>The <code>controls</code> attribute adds video controls, like play, pause, and volume.</p>
                        <p>It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads.</p>
                        <p>The <code>source</code> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format.</p>
                        <p>The text between the <code>&lt;video&gt;</code> and <code>&lt;/video&gt;</code> tags will only be displayed in browsers that do not support the <code>&lt;video&gt;</code> element.</p>
                        <p><strong>VIDEO ATTRIBUTES</strong></p>
                        <p>autoplay, controls, height, loop, muted, poster, preload, src, width.</p>
                    </div>                                        
                </div>
                <div className='coursebox'>
                    <div className='title'>
                        <h4> HTML iframe Element </h4>
                    </div>
                    <div className='coursebody'>
                        <p>An iframe is used to display a web page within a web page. The src attribute specifies the URL (web address) of the inline frame page. Use the height and width attributes to specify the size of the iframe. The attribute values are specified in pixels by default, but they can also be in percent (like "80%").</p>
                        <pre><code>&lt;iframe <span style={green}>src=</span>'https://www.youtube.com/embed/XGSy3_Czz8k'&gt;&lt;/iframe&gt;</code></pre>
                        <p>Define a width and height for the iframe element.</p>
                        <pre><code>&lt;iframe <span style={green}>src=</span>'https://www.youtube.com/embed/XGSy3_Czz8k' <span style={green}>width=</span>'200' <span style={green}>height=</span>'300'&gt;&lt;/iframe&gt;</code></pre>
                        <p>Remove the border.</p>
                        <pre><code>&lt;iframe <span style={green}>src=</span>'https://www.youtube.com/embed/XGSy3_Czz8k' <span style={green}>width=</span>'200' <span style={green}>height=</span>'300' <span style={green}>style=</span>'border:none;'&gt;&lt;/iframe&gt;</code></pre>
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

export default HtmlMedia;