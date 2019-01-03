<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1561.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 14.0px; font: 12.0px Menlo; color: #22863a; -webkit-text-stroke: #22863a}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 14.0px; font: 12.0px Menlo; color: #22863a; -webkit-text-stroke: #22863a; min-height: 14.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #032f62; -webkit-text-stroke: #032f62}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 14.0px; font: 12.0px Menlo; color: #22863a}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #24292e; -webkit-text-stroke: 0px #24292e}
    span.s3 {font-kerning: none; -webkit-text-stroke: 0px #000000}
  </style>
</head>
<body>
<p class="p1"><span class="s1">var LoremIpsum;</span></p>
<p class="p1"><span class="s1">( function () {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Constructor</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>LoremIpsum = function () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>this.numParagraph = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Static</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>LoremIpsum.TYPE = { PARAGRAPH: 1, SENTENCE: 2, WORD: 3 };</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>LoremIpsum.WORDS = [</span></p>
<p class="p3"><span class="s1"><span class="Apple-converted-space">      </span>'lorem'</span><span class="s2">, </span><span class="s1">'ipsum'</span><span class="s2">, </span><span class="s1">'dolor'</span><span class="s2">, </span><span class="s1">'sit'</span><span class="s2">, </span><span class="s1">'amet'</span><span class="s2">, </span><span class="s1">'consectetur'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'adipiscing'</span><span class="s2">, </span><span class="s1">'elit'</span><span class="s2">, </span><span class="s1">'curabitur'</span><span class="s2">, </span><span class="s1">'vel'</span><span class="s2">, </span><span class="s1">'hendrerit'</span><span class="s2">, </span><span class="s1">'libero'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">’eleifend'</span><span class="s2">, </span><span class="s1">'blandit'</span><span class="s2">, </span><span class="s1">'nunc'</span><span class="s2">, </span><span class="s1">'ornare'</span><span class="s2">, </span><span class="s1">'odio'</span><span class="s2">, </span><span class="s1">'ut'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'orci'</span><span class="s2">, </span><span class="s1">'gravida'</span><span class="s2">, </span><span class="s1">'imperdiet'</span><span class="s2">, </span><span class="s1">'nullam'</span><span class="s2">, </span><span class="s1">'purus'</span><span class="s2">, </span><span class="s1">'lacinia'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'a'</span><span class="s2">, </span><span class="s1">'pretium'</span><span class="s2">, </span><span class="s1">'quis'</span><span class="s2">, </span><span class="s1">'congue'</span><span class="s2">, </span><span class="s1">'praesent'</span><span class="s2">, </span><span class="s1">'sagittis'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'laoreet'</span><span class="s2">, </span><span class="s1">'auctor'</span><span class="s2">, </span><span class="s1">'mauris'</span><span class="s2">, </span><span class="s1">'non'</span><span class="s2">, </span><span class="s1">'velit'</span><span class="s2">, </span><span class="s1">'eros'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'dictum'</span><span class="s2">, </span><span class="s1">'proin'</span><span class="s2">, </span><span class="s1">'accumsan'</span><span class="s2">, </span><span class="s1">'sapien'</span><span class="s2">, </span><span class="s1">'nec'</span><span class="s2">, </span><span class="s1">'massa'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'volutpat'</span><span class="s2">, </span><span class="s1">'venenatis'</span><span class="s2">, </span><span class="s1">'sed'</span><span class="s2">, </span><span class="s1">'eu'</span><span class="s2">, </span><span class="s1">'molestie'</span><span class="s2">, </span><span class="s1">'lacus'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'quisque'</span><span class="s2">, </span><span class="s1">'porttitor'</span><span class="s2">, </span><span class="s1">'ligula'</span><span class="s2">, </span><span class="s1">'dui'</span><span class="s2">, </span><span class="s1">'mollis'</span><span class="s2">, </span><span class="s1">'tempus'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'at'</span><span class="s2">, </span><span class="s1">'magna'</span><span class="s2">, </span><span class="s1">'vestibulum'</span><span class="s2">, </span><span class="s1">'turpis'</span><span class="s2">, </span><span class="s1">'ac'</span><span class="s2">, </span><span class="s1">'diam'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'tincidunt'</span><span class="s2">, </span><span class="s1">'id'</span><span class="s2">, </span><span class="s1">'condimentum'</span><span class="s2">, </span><span class="s1">'enim'</span><span class="s2">, </span><span class="s1">'sodales'</span><span class="s2">, </span><span class="s1">'in'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'hac'</span><span class="s2">, </span><span class="s1">'habitasse'</span><span class="s2">, </span><span class="s1">'platea'</span><span class="s2">, </span><span class="s1">'dictumst'</span><span class="s2">, </span><span class="s1">'aenean'</span><span class="s2">, </span><span class="s1">'neque'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'fusce'</span><span class="s2">, </span><span class="s1">'augue'</span><span class="s2">, </span><span class="s1">'leo'</span><span class="s2">, </span><span class="s1">'eget'</span><span class="s2">, </span><span class="s1">'semper'</span><span class="s2">, </span><span class="s1">'mattis'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'tortor'</span><span class="s2">, </span><span class="s1">'scelerisque'</span><span class="s2">, </span><span class="s1">'nulla'</span><span class="s2">, </span><span class="s1">'interdum'</span><span class="s2">, </span><span class="s1">'tellus'</span><span class="s2">, </span><span class="s1">'malesuada'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'rhoncus'</span><span class="s2">, </span><span class="s1">'porta'</span><span class="s2">, </span><span class="s1">'sem'</span><span class="s2">, </span><span class="s1">'aliquet'</span><span class="s2">, </span><span class="s1">'et'</span><span class="s2">, </span><span class="s1">'nam'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'suspendisse'</span><span class="s2">, </span><span class="s1">'potenti'</span><span class="s2">, </span><span class="s1">'vivamus'</span><span class="s2">, </span><span class="s1">'luctus'</span><span class="s2">, </span><span class="s1">'fringilla'</span><span class="s2">, </span><span class="s1">'erat'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'donec'</span><span class="s2">, </span><span class="s1">'justo'</span><span class="s2">, </span><span class="s1">'vehicula'</span><span class="s2">, </span><span class="s1">'ultricies'</span><span class="s2">, </span><span class="s1">'varius'</span><span class="s2">, </span><span class="s1">'ante'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'primis'</span><span class="s2">, </span><span class="s1">'faucibus'</span><span class="s2">, </span><span class="s1">'ultrices'</span><span class="s2">, </span><span class="s1">'posuere'</span><span class="s2">, </span><span class="s1">'cubilia'</span><span class="s2">, </span><span class="s1">'curae'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'etiam'</span><span class="s2">, </span><span class="s1">'cursus'</span><span class="s2">, </span><span class="s1">'aliquam'</span><span class="s2">, </span><span class="s1">'quam'</span><span class="s2">, </span><span class="s1">'dapibus'</span><span class="s2">, </span><span class="s1">'nisl'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'feugiat'</span><span class="s2">, </span><span class="s1">'egestas'</span><span class="s2">, </span><span class="s1">'class'</span><span class="s2">, </span><span class="s1">'aptent'</span><span class="s2">, </span><span class="s1">'taciti'</span><span class="s2">, </span><span class="s1">'sociosqu'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'ad'</span><span class="s2">, </span><span class="s1">'litora'</span><span class="s2">, </span><span class="s1">'torquent'</span><span class="s2">, </span><span class="s1">'per'</span><span class="s2">, </span><span class="s1">'conubia'</span><span class="s2">, </span><span class="s1">'nostra'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'inceptos'</span><span class="s2">, </span><span class="s1">'himenaeos'</span><span class="s2">, </span><span class="s1">'phasellus'</span><span class="s2">, </span><span class="s1">'nibh'</span><span class="s2">, </span><span class="s1">'pulvinar'</span><span class="s2">, </span><span class="s1">'vitae'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'urna'</span><span class="s2">, </span><span class="s1">'iaculis'</span><span class="s2">, </span><span class="s1">'lobortis'</span><span class="s2">, </span><span class="s1">'nisi'</span><span class="s2">, </span><span class="s1">'viverra'</span><span class="s2">, </span><span class="s1">'arcu'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'morbi'</span><span class="s2">, </span><span class="s1">'pellentesque'</span><span class="s2">, </span><span class="s1">'metus'</span><span class="s2">, </span><span class="s1">'commodo'</span><span class="s2">, </span><span class="s1">'ut'</span><span class="s2">, </span><span class="s1">'facilisis'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'felis'</span><span class="s2">, </span><span class="s1">'tristique'</span><span class="s2">, </span><span class="s1">'ullamcorper'</span><span class="s2">, </span><span class="s1">'placerat'</span><span class="s2">, </span><span class="s1">'aenean'</span><span class="s2">, </span><span class="s1">'convallis'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'sollicitudin'</span><span class="s2">, </span><span class="s1">'integer'</span><span class="s2">, </span><span class="s1">'rutrum'</span><span class="s2">, </span><span class="s1">'duis'</span><span class="s2">, </span><span class="s1">'est'</span><span class="s2">, </span><span class="s1">'etiam'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'bibendum'</span><span class="s2">, </span><span class="s1">'donec'</span><span class="s2">, </span><span class="s1">'pharetra'</span><span class="s2">, </span><span class="s1">'vulputate'</span><span class="s2">, </span><span class="s1">'maecenas'</span><span class="s2">, </span><span class="s1">'mi'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'fermentum'</span><span class="s2">, </span><span class="s1">'consequat'</span><span class="s2">, </span><span class="s1">'suscipit'</span><span class="s2">, </span><span class="s1">'aliquam'</span><span class="s2">, </span><span class="s1">'habitant'</span><span class="s2">, </span><span class="s1">'senectus'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'netus'</span><span class="s2">, </span><span class="s1">'fames'</span><span class="s2">, </span><span class="s1">'quisque'</span><span class="s2">, </span><span class="s1">'euismod'</span><span class="s2">, </span><span class="s1">'curabitur'</span><span class="s2">, </span><span class="s1">'lectus'</span><span class="s2">,</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s1">'elementum'</span><span class="s2">, </span><span class="s1">'tempor'</span><span class="s2">, </span><span class="s1">'risus'</span><span class="s2">, </span><span class="s1">'cras’, 'molestie'</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Random engine</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>LoremIpsum.prototype.randomizeInt = function (low, top) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>return Math.floor(Math.random() * (top - low + 1)) + low;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Text builder for paragraphs, sentences and words</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Parameters: number of elements, type of element for text</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>LoremIpsum.prototype.buildText = function (numElement, typeElement) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>switch (tyoeElement) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>//PARAGRAPH</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>case LoremIpsum.TYPE.PARAGRAPH:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>var paragraphs = new Arrary;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>for (var p = 0; p &lt;= numElement; p++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">               </span>var parLen = this.randomizeInt(4, 9);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>var par = this.buildText(parLen, LoremIpsum.TYPE.SENTENCE);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>paragraphs.push('&lt;p&gt;' + par + '&lt;p&gt;');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return paragraphs.join('\n’);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>//SENTENCE</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>case LoremIpsum.TYPE.SENTENCE:</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>var sentences = new Arrary;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>for (var s = 0; s &lt;= numElement; s++) {</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>var senLen = this.randomizeInt(10, 20);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>var words = this.buildText(senLen, LoremIpsum.TYPE.WORD).split(' ');</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>var sen = words.join(' ');</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">               </span>sentences.push(sen);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>return (paragraphs.join('.') + '.');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>//WORD</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>case LoremIpsum.TYPE.WORD:</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>var wordId = this.randomizeInt(0, LoremIpsum.WORD.lenght - numElement - 1);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>return LoremIpsum.WORDS.slice(wordId, wordId + numElement).join(' ');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Trigger method</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>LoremIpsum.prototype.createLoremIpsum = function (element) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var loremExit = new Array;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>loremExit.push(this.buildText(this.numParagraph, LoremIpsum.TYPE.PARAGRAPH));</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>loremExit = loremExit.join(</span><span class="s3">' '</span><span class="s1">);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (element) element.innerHTML += loremExit;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (element == null) return loremExit;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>//Event</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>window.addEventListener(</span><span class="s3">'</span><span class="s1">DOMContentLoaded</span><span class="s3">'</span><span class="s1">, function () {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>var eventListener = document.querySelectorAll(</span><span class="s3">'</span><span class="s1">[data-loremipsum]</span><span class="s3">'</span><span class="s1">);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>for (var l in eventListener) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">         </span>if (eventListener.hasOwnProperty(l)) {</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>var lorem = new Lorem;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>lorem.numParagraph = eventListener[l].getAttribute('data-loremipsum');</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span>lorem.createLoremIpsum(eventListener[l]);</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">         </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">   </span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">}) ();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
</body>
</html>
