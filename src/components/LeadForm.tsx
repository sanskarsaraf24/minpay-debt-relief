import { useEffect } from "react";

export const LeadForm = () => {
  useEffect(() => {
    // Load the external script after component mounts
    const script = document.createElement('script');
    script.id = 'wf_script';
    script.src = 'https://bigin.zoho.in/crm/WebformScriptServlet?rid=206bee3eff6dbfc2bd8a5ee7d8f37b6c90c684ce5c8ae2010bf615c549791d6d15de08b62993f0ec3638b64546069d2bgid910416d7add4b94f7f957111becbdaf1776a5dc660db0911355d81e68a6133c1';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scriptEle = document.getElementById('wf_script');
      if (scriptEle) {
        document.body.removeChild(scriptEle);
      }
    };
  }, []);

  const formHTML = `
<style type='text/css'>
:root, html { font-size: 10px; }
* { padding: 0; margin: 0; outline: 0; }
html, body { height: 100%; width: 100%; font-weight: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: transparent; font-size: 15px; }
ul, ol { list-style-position: inside; }
textarea, input[type='text'], input[type='button'], input[type='submit'], input[type='date'] { -webkit-appearance: none; }
input:focus, select:focus, textarea:focus, button:focus { outline: none; }
.link { color: #1980D8; cursor: pointer; }
.cP { cursor: pointer; }
.flex-center-v { display: flex; align-items: center; }
.wf-form-component { padding: 0; }
.wf-form-paid { padding-bottom: 45px; }
.wf-parent { padding: 0; height: 100%; box-sizing: border-box; overflow: visible; background-repeat: no-repeat; background-size: 100% 100%; }
.wf-wrapper * { box-sizing: border-box; }
.wf-wrapper { width: 100%; max-width: 100%; border-radius: 0; margin: auto; border: none; background-color: transparent; color: #222; box-shadow: none; }
.iframe-container { height: 100%; width: 100%; border: none; min-height: 365px; }
.wf-logo { display: flex; margin-bottom: 30px; max-height: 60px; justify-content: center; }
.wf-logo[data-ux-logo-size='lg'] { height: 60px; }
.wf-logo[data-ux-logo-size='md'] { height: 50px; }
.wf-logo[data-ux-logo-size='sm'] { height: 30px; }
.wf-logo[data-ux-logo-pos='left'] { justify-content: left; }
.wf-logo[data-ux-logo-pos='center'] { justify-content: center; }
.wf-logo[data-ux-logo-pos='right'] { justify-content: right; }
.wf-header { font-size: 22px; padding-bottom: 35px; font-weight: bold; word-break: break-word; }
.wf-sec-wrap { margin-bottom: 40px; }
.wf-sec-wrap:first-child .wf-sec-head { margin-top: 0; }
.wf-sec-head { margin-bottom: 20px; margin-top: 35px; }
.wf-sec-title { font-size: 18px; font-weight: bold; word-break: break-word; }
.wf-sec-desc { margin: 0; margin-top: 5px; word-break: break-word; }
.wf-row { margin-bottom: 20px; }
.wf-row-with-supplementary { margin-bottom: 10px; }
.wf-label { padding: 7px 0; word-break: break-word; }
.wf-field:not(.multiple-fields-div) { text-align: left; word-break: break-word; border: 0; position: relative; }
.wf-field-inner { position: relative; display: flex; flex: 1; }
.wf-field-input:focus { border: 1px solid #1AB16D; }
.wf-field-dropdown .wf-field-input:focus { border: none; }
.wf-input-focus.wf-field::after { opacity: 1; }
.wf-input-focus.wf-field::after, .wf-field-error-active.wf-field .wf-field-error { display: block; }
.wf-field-error-active.wf-field .wf-error-view-more { display: flex; }
.wf-field-error-active.wf-field .wf-field-input:not(.date-input-container .wf-field-input), .wf-field-error-active.wf-field .wf-field-dropdown, .wf-field-error-active .date-input-container { border: 1px solid #FD6B6D; box-shadow: 0 0 1px 1px #F4A2A2; }
.wf-field-mandatory .wf-field-inner::before { content: ''; position: absolute; left: 0px; background-color: #ff6a6a; width: 3px; height: 100%; border-top-left-radius: 4px; border-bottom-left-radius: 4px; z-index: 2; top: 0; bottom: 0; }
.wf-field-mandatory .wf-field-inner.no-results-elem::before { height: 98%; }
.wf-field-input, .wf-field-dropdown { width: 100%; border: 1px solid #BDC8D3; border-radius: 4px; padding: 10px 15px; min-height: 38px; font-size: 15px; font-family: inherit; }
select:not([data-wform-field='select-multiple']) { -webkit-appearance: none; -moz-appearance: none; background: transparent; background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='34' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>"); background-repeat: no-repeat; background-position-x: 99%; background-color: #fff; min-width: 70px; }
input, select { background-color: #fff; }
.wf-field-item { min-height: 38px; }
.wf-time-field-wrapper { display: flex; flex: 1; }
.wf-time-field-wrapper select { margin-left: 10px; }
.wf-form-component .wf-field-error, .wf-form-component .wf-field-help-text { text-align: left; }
.wf-form-component .wf-field-error { text-align: right; }
.wf-field-error { color: #FF5050; font-size: 12px; margin-top: 4px; display: none; animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px; }
.wf-field-error-long { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wf-error-view-more { font-size: 12px; display: none; white-space: nowrap; align-items: center; color: #1880d8; margin-top: 4px; }
.wf-error-view-more:hover { text-decoration: underline; cursor: pointer; }
.wf-error-parent-ele { display: flex; justify-content: end; }
.wf-field-help-text { color: #515159; font-size: 12px; margin-top: 5px; }
.wf-field-help-text + .wf-error-parent-ele .wf-field-error, .wf-field-help-text + .wf-error-parent-ele .wf-error-view-more { margin: 0; }
.wf-field-help-text-link { text-decoration: none; }
.wf-field-checkbox { cursor: pointer; border-radius: 3px; min-width: 14px; min-height: 20px; box-sizing: initial; accent-color: #1AB16D; margin-right: 10px; margin-bottom: auto; }
.wf-field-dropdown-date { padding: 8px 12px; border-radius: 4px; font-size: 15px; cursor: pointer; border: 1px solid #BDC8D3; }
.wf-field-dropdown-date:hover { border: 1px solid #65C199; }
.wform-field-item-upload-input { min-height: 5rem; background-color: #FBFCFD; border: 1px dashed #bdc8d3; line-height: 2.1; cursor: pointer; }
.wform-field-item-upload-input:focus { border: 1px dashed #bdc8d3; }
.wform-file-upload-input-label { background-color: #fff; background-image: linear-gradient(to top, #F5F8FA, #ffffff); color: #212129; border-color: #d3dbe3; border: 1px solid #d3dbe3; border-radius: 4px; padding: 0.7rem 2rem; font-size: 1.4rem; right: 1rem; transform: translateY(-50%); top: 50%; position: absolute; }
input[type='file']::file-selector-button, input[type='file']::-webkit-file-upload-button { opacity: 0; width: 0; height: 28px; }
.wf-row[data-ux-field-appearance='captcha'] .wf-field { display: flex; align-items: center; }
.wform-field-item-captcha-input { border-top-right-radius: 0; border-bottom-right-radius: 0; }
.wf-field-captcha-img-wrap { border: 1px solid #BDC8D3; border-radius: 4px; border-left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0; height: initial; overflow: hidden; min-width: 120px; }
.wf-field-captcha-img { height: 38px; width: 100%; }
.reload-img { font-size: 23px; color: #4B5569; margin-right: 5px; }
.reload-captcha { margin-left: 10px; user-select: none; }
.wf-btn { padding: 10px 20px; border-radius: 4px; font-size: 15px; cursor: pointer; font-weight: bold; font-family: inherit; }
.wf-btn[data-ux-btn-type='default'] { border-radius: 0; }
.wf-btn[data-ux-btn-type='primary'] { border-radius: 4px; }
.wf-btn[data-ux-btn-type='secondary'] { border-radius: 20px; }
.wform-btn-wrap { display: flex; margin-top: 40px; align-items: center; justify-content: flex-end; flex: 1; }
.wform-poweredby-container { position: absolute; left: 0; bottom: 0; border-top-right-radius: 10px; border-bottom-left-radius: 10px; background-color: #23384F; font-size: 13px; padding: 6px 8px; font-family: sans-serif; display: flex; align-items: center; }
.wf-text-area-input { resize: vertical; height: 100px; min-height: 100px; max-height: 200px; }
.dropdown-contents::after { border-left: 0.4rem solid transparent; border-right: 0.4rem solid transparent; border-top: 0.4rem solid black; top: 45%; content: ''; position: absolute; right: 1rem; pointer-events: none; }
.wf-form-component:not([data-ux-form-alignment='top']) .wf-row { display: flex; }
.wf-form-component:not([data-ux-form-alignment='top']) .wf-label { word-break: break-word; width: 30%; padding: 1.2rem 2rem 0; }
.wf-form-component[data-ux-form-alignment='left'] .wf-label { text-align: left; padding-left: 0; }
.wf-form-component[data-ux-form-alignment='right'] .wf-label { text-align: right; }
.wf-form-component[data-ux-form-alignment='center'] .wf-label { text-align: center; }
.wform-btn-wrap[data-ux-pos='left'] { justify-content: flex-start; }
.wform-btn-wrap[data-ux-pos='center'] { justify-content: center; }
.wform-btn-wrap[data-ux-pos='right'] { justify-content: flex-end; }
.wf-form-component:not([data-ux-form-alignment='top']) .wf-field { width: 70%; }
.wf-form-component[data-ux-form-alignment='top'] .wf-label { padding-top: 0; }
.wf-form-component[data-ux-form-alignment='top'] .reload-captcha { text-align: right; }
.wf-row[data-ux-field-appearance='captcha'] .wf-field-inner { height: 38px; }
.wf-row[data-ux-field-appearance='captcha'] .wf-field.wf-field-error-active { flex-wrap: wrap; }
.wf-row[data-ux-field-appearance='captcha'] .wf-field-error { flex-basis: 100%; width: 100%; }
@keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
@media screen and (max-width: 1024px) {
  .wf-wrapper { max-width: 700px; width: 100%; border: 0; }
  .wf-field input[type=text], .wf-field select, .wf-field textarea { width: 100% !important; }
  .wf-label:empty { display: none; }
  .wf-field-checkbox { min-width: 18px; min-height: 18px; }
}
@media screen and (max-width: 768px) {
  .wf-wrapper { max-width: 700px; width: 100%; border: 0; }
  .wf-field input[type=text], .wf-field select, .wf-field textarea { width: 100% !important; }
  .wf-label:empty { display: none; }
  .wf-form-component[data-ux-form-alignment='top'] .wform-btn-wrap { justify-content: flex-start; }
}
@media screen and (max-width: 590px) {
  .wf-parent { padding: 0; }
  .wf-wrapper { width: 100% !important; border: 0; }
  .wf-form-component { padding: 0; padding-bottom: 0; }
  .wf-field input[type=text], .wf-field select, .wf-field textarea { width: 100% !important; }
  .wf-label:empty { display: none; }
  .wf-row[data-ux-field-appearance='date-time'] .wf-field-inner { flex-direction: column; }
  .wf-row[data-ux-field-appearance='date-time'] .wf-time-field-wrapper { margin-top: 10px; }
  .wf-row[data-ux-field-appearance='date-time'] .wf-field-item:first-child { margin-left: 0; }
  .wf-row[data-ux-field-appearance='date-time'] .wf-field-item { flex: 1; }
  .wf-row[data-ux-field-appearance='captcha'] .wf-field { flex-direction: column; }
  .wf-row[data-ux-field-appearance='captcha'] .reload-captcha { margin-left: auto; }
  .wf-row[data-ux-field-appearance='captcha'] .wf-field-inner { width: 100%; }
}
</style>
<iframe id='hidden1032377000000442383Frame' name='hidden1032377000000442383Frame' style='display: none;' class='iframe-container'></iframe>
<div class='wf-parent' id='BiginWebToRecordFormParent1032377000000442383' style='background-color: transparent'>
  <div class='wf-wrapper' id='BiginWebToRecordFormDiv1032377000000442383'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
    <form id='BiginWebToRecordForm1032377000000442383' name='BiginWebToRecordForm1032377000000442383' class='wf-form-component' data-ux-form-alignment='top' style='font-family: Arial;position: relative;font-size:15px;' method='POST' enctype='multipart/form-data' target='hidden1032377000000442383Frame' onSubmit='javascript:document.charset="UTF-8"; return validateForm1032377000000442383()' accept-charset='UTF-8'>
      <input type='text' style='display:none;' name='xnQsjsdp' value='910416d7add4b94f7f957111becbdaf1776a5dc660db0911355d81e68a6133c1'/>
      <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
      <input type='text' style='display:none;' name='xmIwtLD' value='206bee3eff6dbfc2bd8a5ee7d8f37b6c90c684ce5c8ae2010bf615c549791d6d15de08b62993f0ec3638b64546069d2b'/>
      <input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM='/>
      <input type='hidden' name='rmsg' id='rmsg' value='true'/>
      <input type='text' style='display:none;' name='returnURL' value='null' />
      <div class='wf-logo' data-ux-logo-pos='center' data-ux-logo-size='lg'><img src='https://bigin.zoho.in/crm/WebformImgServlet?type=logo&rid=206bee3eff6dbfc2bd8a5ee7d8f37b6c90c684ce5c8ae2010bf615c549791d6d15de08b62993f0ec3638b64546069d2bgid910416d7add4b94f7f957111becbdaf1776a5dc660db0911355d81e68a6133c1'/></div>
      <div class='wf-header'>Consultancy Form</div>
      <div id='elementDiv1032377000000442383' class='wf-form-wrapper'>
        <div class='wf-row'>
          <div class='wf-label'>Full Name</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner'>
              <input name='Last Name' maxlength='80' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
            </div>
          </div>
        </div>
        <div class='wf-row'>
          <div class='wf-label'>Mobile</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner'>
              <input fvalidate='true' ftype='mobile' name='Mobile' maxlength='30' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
            </div>
          </div>
        </div>
        <div class='wf-row'>
          <div class='wf-label'>Email</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner'>
              <input fvalidate='true' ftype='email' name='Email' maxlength='100' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
            </div>
          </div>
        </div>
        <div class='wf-row'>
          <div class='wf-label'>City</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner'>
              <input name='CONTACTCF4' maxlength='255' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
            </div>
          </div>
        </div>
        <div class='wf-row'>
          <div class='wf-label'>Monthly Income</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner'>
              <input fvalidate='true' ftype='number' name='CONTACTCF51' maxlength='9' type='text' value='' class='wf-field-item wf-field-input' oninput='removeError(this)'/>
            </div>
          </div>
        </div>
        <div class='wf-row'>
          <div class='wf-label'>Total Loan Amount</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner dropdown-contents'>
              <select name='CONTACTCF6' class='wf-field-item wf-field-dropdown' data-wform-field='select' onchange='removeError(this);'>
                <option value='-None-'>-None-</option>
                <option value='1-3&#x20;lakh'>1-3 lakh</option>
                <option value='3-5&#x20;lakh'>3-5 lakh</option>
                <option value='5-10&#x20;lakh'>5-10 lakh</option>
                <option value='more&#x20;than&#x20;10&#x20;lakh'>more than 10 lakh</option>
              </select>
            </div>
          </div>
        </div>
        <div class='wf-row'>
          <div class='wf-label'>Payment Status</div>
          <div class='wf-field wf-field-mandatory'>
            <div class='wf-field-inner dropdown-contents'>
              <select name='CONTACTCF5' class='wf-field-item wf-field-dropdown' data-wform-field='select' onchange='removeError(this);'>
                <option value='-None-'>-None-</option>
                <option value='paying&#x20;full&#x20;amount&#x20;with&#x20;difficulty'>paying full amount with difficulty</option>
                <option value='paying&#x20;minimum&#x20;amount&#x20;from&#x20;few&#x20;months'>paying minimum amount from few months</option>
                <option value='not&#x20;paying&#x20;&amp;&#x20;getting&#x20;collection&#x20;calls'>not paying &amp; getting collection calls</option>
              </select>
            </div>
          </div>
        </div>
        <div class='wform-btn-wrap' data-ux-pos='center'>
          <input id='formsubmit' type='submit' class='wf-btn' data-ux-btn-type='default' style='background-color:#1AB16D; color: #fff; border: 1px solid #1AB16D;width: auto;' value='Submit'/>
        </div>
      </div>
    </form>
  </div>
</div>
<script>
  var mndFileds=new Array('Last\\x20Name','Mobile','Email','CONTACTCF4','CONTACTCF51','CONTACTCF6','CONTACTCF5');
  var fldLangVal=new Array('Full Name','Mobile','Email','City','Monthly Income','Total Loan Amount','Payment Status');
  var wfInnerWidth = window.innerWidth;
  if(wfInnerWidth <= 768){
    document.forms['BiginWebToRecordForm1032377000000442383'].setAttribute('data-ux-form-alignment', 'top');
  }
  function removeError(fieldObj) {
    var parentElement = fieldObj.closest('.wf-field'),
      childEle = parentElement.getElementsByClassName('wf-error-parent-ele')[0];
    if(childEle) {
      parentElement.classList.remove('wf-field-error-active');
      parentElement.removeChild(parentElement.getElementsByClassName('wf-error-parent-ele')[0]);
    }
  }
  function setError(fieldObj, label) {
    var parentElement = fieldObj.closest('.wf-field'),
      childEle = parentElement.getElementsByClassName('wf-error-parent-ele')[0];
    if(!childEle) {
      var errorParentEle = document.createElement('DIV'),
        spanEle = document.createElement('SPAN'),
        viewMoreEle = document.createElement('SPAN');
      spanEle.setAttribute('class', 'wf-field-error wf-field-error-long');
      spanEle.innerHTML = label;
      errorParentEle.classList.add('wf-error-parent-ele');
      errorParentEle.appendChild(spanEle);
      parentElement.append(errorParentEle);
      parentElement.classList.add('wf-field-error-active');
      if(spanEle.scrollWidth > parentElement.offsetWidth) {
        viewMoreEle.innerHTML = 'View More';
        viewMoreEle.classList.add('wf-error-view-more');
        errorParentEle.append(viewMoreEle);
        viewMoreEle.addEventListener('click', function() {
          errorParentEle.removeChild(viewMoreEle);
          spanEle.classList.remove('wf-field-error-long');
        });
      } else {
        spanEle.classList.remove('wf-field-error-long')
      }
    }
  }
  function validateFields1032377000000442383() {
    var isReturn = true;
    var form = document.forms['BiginWebToRecordForm1032377000000442383'];
    var validateFld = form.querySelectorAll('[fvalidate=true]');
    var i;
    for (i = 0; i < validateFld.length; i++) {
      var validateFldVal = validateFld[i].value;
      var fType = validateFld[i].getAttribute('ftype');
      if(validateFldVal !== '' || (validateFldVal === '' && fType.indexOf('date') !== -1)) {
        var wfLabel = validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName('wf-label')[0];
        var fLabel = wfLabel ? wfLabel.innerHTML: '';
        switch(validateFld[i].getAttribute('ftype')) {
          case 'string_rest_number':
          case 'string':
            var isError = false,
              errorKey = 'Only letters are allowed.';
            if(validateFld[i].getAttribute('ftype') === 'string_rest_number' && validateFldVal.match((/\\d/g)) !== null) {
              isError = true;
            }else if(validateFld[i].hasAttribute('fmin')){
              if(validateFldVal.length < parseInt(validateFld[i].getAttribute('fmin'))) {
                errorKey = 'Your input must be at least ' +validateFld[i].getAttribute('fmin') + ' character(s).';
                isError = true;
              } else if(validateFldVal.length > parseInt(validateFld[i].getAttribute('fmax'))) {
                errorKey = 'Your input should not exceed ' +validateFld[i].getAttribute('fmax') + ' character(s).';
                isError = true;
              }
            }
            if(isError){
              setError(validateFld[i], errorKey);
              isReturn = false;
            }
            break;
          case 'email':
            if(validateFldVal.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
              setError(validateFld[i], 'Enter valid ' + fLabel);
              isReturn = false;
            }
            break;
          case 'number':
          case 'double':
            var isError = false,
              errorKey = 'Enter valid ' + fLabel;
            if((validateFld[i].getAttribute('ftype') === 'number' && validateFldVal.match(/^[0-9]+$/) === null)
              || (validateFld[i].getAttribute('ftype') === 'double' && validateFldVal.match(/^[0-9]*(\\.[0-9]{0,2})?$/) === null)) {
              isError = true;
            }else if(validateFld[i].hasAttribute('fmin')){
              if(validateFldVal < parseInt(validateFld[i].getAttribute('fmin'))) {
                errorKey = 'Enter a number greater than or equal to ' +validateFld[i].getAttribute('fmin');
                isError = true;
              } else if(validateFldVal > parseInt(validateFld[i].getAttribute('fmax'))) {
                errorKey = 'Enter a number less than or equal to ' +validateFld[i].getAttribute('fmax');
                isError = true;
              }
            }
            if(isError){
              setError(validateFld[i], errorKey);
              isReturn = false;
            }
            break;
          case 'mobile':
            if(validateFldVal.match(/^[0-9a-zA-Z+.()\\-;\\s]+$/) === null) {
              setError(validateFld[i], 'Enter valid ' + fLabel);
              isReturn = false;
            }
            break;
        }
      }
    }
    return isReturn;
  }

  function checkMandatory1032377000000442383() {
    var isReturn = true;
    var isNotCaptcha = false;
    for(i=0;i<mndFileds.length;i++) {
      var fieldObj=document.forms['BiginWebToRecordForm1032377000000442383'][mndFileds[i]];
      if(fieldObj) {
        if (((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length==0) {
          if(fieldObj.type =='file'){
            setError(fieldObj, 'Please select a file to upload.');
            isReturn = false;
          } else {
            setError(fieldObj, fldLangVal[i] + ' cannot be empty');
            isReturn= false;
          }
        } else if(fieldObj.nodeName=='SELECT') {
          if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
            setError(fieldObj, fldLangVal[i] +' cannot be none.');
            isReturn = false;
          }
        } else if(fieldObj.type =='checkbox'){
          if(fieldObj.checked == false){
            setError(fieldObj, 'Please accept  '+fldLangVal[i]);
            isReturn= false;
          }
        }
      }
    }
    isNotCaptcha = true;
    if(!validateFields1032377000000442383()){isReturn = false;}
    if(!isReturn){
      var errEle = document.getElementsByClassName('wf-field-error');
      if(errEle && errEle.length >0){
        var inputEle = errEle[0].closest('.wf-field').getElementsByTagName('input');
        if(inputEle && inputEle.length == 0) {
          inputEle = errEle[0].closest('.wf-field').getElementsByTagName('select');
        }
        if(inputEle && inputEle.length > 0) {
          inputEle[0].focus();
        }
      }
    }else if(isNotCaptcha){
      document.getElementById('formsubmit').disabled = true;
    }
    return isReturn;
  }

  function validateForm1032377000000442383() {
    return checkMandatory1032377000000442383();
  }

  document.getElementById('hidden1032377000000442383Frame').addEventListener('load', function () {
    try {
      var doc = arguments[0].currentTarget.contentWindow.document;
      if(doc.body.childElementCount !== 0) {
        arguments[0].currentTarget.style.display = 'block';
        document.getElementById('BiginWebToRecordFormParent1032377000000442383').style.display = 'none';
      }
    } catch (error) {
      arguments[0].currentTarget.style.display = 'block';
      document.getElementById('BiginWebToRecordFormParent1032377000000442383').style.display = 'none'
    }
  });
</script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: formHTML }} />;
};