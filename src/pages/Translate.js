import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Translate.css';
import axios from 'axios';

function Translate() {
  const [fileInfo, setFileInfo] = useState({ name: '', length: '', language: '' });
  const [activeStep, setActiveStep] = useState(1);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file && file.type === 'video/mp4') {
      console.log(file);
      // 백엔드가 없으므로, axios를 사용해 모의 응답을 생성합니다.
      axios.post('http://localhost:3000/translate', file).then(response => {
        // 여기서는 가짜 데이터를 사용하고 있습니다.
        setFileInfo({ name: file.name, length: '120 mins', language: 'Korean' });
        setActiveStep(3); // 파일 업로드 후 단계 3으로 이동
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'video/mp4'
  });

  return (
    <div className='translateBody'>
      <div className="translateBg">
        <div {...getRootProps()} className="uploadBox">
          <input {...getInputProps()}  />
          {
            isDragActive ?
            // isDragActive || showAfter ?
              <div className="after">
                <div className="uploadWindow">
                  <div className="uploadGuide">
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none">
                      <path d="M31.1414 54.056C19.4 56.848 10.6667 67.4054 10.6667 80C10.6667 94.728 22.6054 106.667 37.3334 106.667C39.8587 106.667 42.304 106.315 44.6214 105.659M96.1467 54.056C107.888 56.848 116.619 67.4054 116.619 80C116.619 94.728 104.68 106.667 89.952 106.667C87.4267 106.667 84.9813 106.315 82.6667 105.659M96 53.3334C96 35.6614 81.672 21.3334 64 21.3334C46.328 21.3334 32 35.6614 32 53.3334M45.5067 74.3494L64 55.7974L83.0187 74.6667M64 101.333V65.232" stroke="#EB9E9D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>원하는 영상을<br />업로드 해주세요.</p>
                  </div>
                </div>
              </div> :
              <div className="before">
                <div className="playBox">
                  <svg width="154" height="159" viewBox="0 0 154 159" fill="none" className="playBtn">
      <g filter="url(#filter0_d_307_197)">
      <rect width="150" height="150" rx="75" fill="#EB9E9D" shape-rendering="crispEdges"/>
      <rect x="1.25" y="1.25" width="147.5" height="147.5" rx="73.75" stroke="#6B7072" stroke-width="2.5" shape-rendering="crispEdges"/>
      <path d="M109.375 67.4223C115.208 70.7902 115.208 79.2098 109.375 82.5777L64.375 108.558C58.5417 111.926 51.25 107.717 51.25 100.981V49.0192C51.25 42.2835 58.5417 38.0736 64.375 41.4415L109.375 67.4223Z" fill="#ECF5F5" stroke="#6B7072" stroke-width="2.5"/>
      </g>
      <defs>
      <filter id="filter0_d_307_197" x="0" y="0" width="154" height="159" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="3" dy="8"/>
      <feGaussianBlur stdDeviation="0.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_307_197"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_307_197" result="shape"/>
      </filter>
      </defs>
                  </svg>
                  <p>영상을 업로드하세요</p>
                </div>
                <svg width="1093" height="614" viewBox="0 0 1093 614" fill='none' className="uploadLayout">
    <path d="M40 1.25H945.154C966.555 1.25 983.904 18.599 983.904 40V479.76C983.904 501.159 966.507 518.51 945.104 518.51H943.073H941.045H939.02H936.998H934.979H932.963H930.95H928.94H926.933H924.929H922.928H920.93H918.936H916.944H914.954H912.968H910.985H909.005H907.027H905.053H903.081H901.112H899.146H897.183H895.223H893.265H891.311H889.359H887.409H885.463H883.519H881.578H879.64H877.704H875.772H873.841H871.914H869.989H868.067H866.147H864.23H862.316H860.404H858.495H856.589H854.685H852.783H850.884H848.988H847.094H845.203H843.314H841.427H839.543H837.662H835.783H833.906H832.032H830.16H828.291H826.423H824.559H822.696H820.836H818.979H817.123H815.27H813.42H811.571H809.725H807.881H806.039H804.2H802.363H800.528H798.695H796.864H795.036H793.209H791.385H789.563H787.743H785.925H784.11H782.296H780.485H778.675H776.868H775.062H773.259H771.458H769.658H767.861H766.066H764.272H762.481H760.691H758.904H757.118H755.334H753.553H751.773H749.994H748.218H746.444H744.671H742.901H741.132H739.364H737.599H735.835H734.074H732.314H730.555H728.799H727.044H725.29H723.539H721.789H720.041H718.294H716.549H714.806H713.065H711.325H709.586H707.849H706.114H704.38H702.648H700.917H699.188H697.46H695.734H694.009H692.286H690.564H688.844H687.125H685.408H683.692H681.977H680.264H678.552H676.841H675.132H673.424H671.718H670.012H668.308H666.606H664.904H663.204H661.505H659.808H658.111H656.416H654.722H653.029H651.338H649.647H647.958H646.27H644.583H642.897H641.212H639.528H637.846H636.164H634.484H632.804H631.126H629.448H627.772H626.096H624.422H622.748H621.076H619.404H617.734H616.064H614.395H612.727H611.06H609.394H607.729H606.065H604.401H602.738H601.076H599.415H597.755H596.095H594.436H592.778H591.121H589.464H587.808H586.153H584.499H582.845H581.192H579.539H577.888H576.236H574.586H572.936H571.286H569.638H567.989H566.342H564.694H563.048H561.402H559.756H558.111H556.467H554.823H553.179H551.536H549.893H548.251H546.609H544.967H543.326H541.685H540.045H538.405H536.765H535.126H533.487H531.848H530.209H528.571H526.933H525.296H523.658H522.021H520.384H518.747H517.111H515.474H513.838H512.202H510.566H508.93H507.295H505.659H504.024H502.388H500.753H499.118H497.483H495.847H494.212H492.577H490.942H489.307H487.672H486.037H484.401H482.766H481.131H479.495H477.86H476.224H474.588H472.952H471.316H469.68H468.044H466.407H464.77H463.133H461.496H459.859H458.221H456.583H454.945H453.307H451.668H450.029H448.389H446.75H445.11H443.469H441.828H440.187H438.546H436.904H435.262H433.619H431.976H430.332H428.688H427.043H425.398H423.753H422.107H420.46H418.813H417.165H415.517H413.868H412.219H410.569H408.918H407.267H405.615H403.963H402.31H400.656H399.001H397.346H395.69H394.034H392.376H390.718H389.059H387.4H385.739H384.078H382.416H380.754H379.09H377.426H375.76H374.094H372.427H370.759H369.09H367.421H365.75H364.079H362.406H360.733H359.058H357.383H355.706H354.029H352.35H350.671H348.99H347.309H345.626H343.942H342.258H340.572H338.885H337.197H335.507H333.817H332.125H330.432H328.738H327.043H325.347H323.649H321.95H320.25H318.549H316.846H315.142H313.437H311.73H310.022H308.313H306.603H304.891H303.177H301.463H299.747H298.029H296.31H294.59H292.868H291.145H289.42H287.694H285.966H284.237H282.507H280.774H279.041H277.305H275.568H273.83H272.09H270.348H268.605H266.86H265.114H263.365H261.616H259.864H258.111H256.356H254.599H252.841H251.081H249.319H247.555H245.79H244.023H242.254H240.483H238.711H236.936H235.16H233.382H231.602H229.82H228.036H226.251H224.463H222.674H220.882H219.089H217.293H215.496H213.697H211.895H210.092H208.287H206.479H204.67H202.858H201.045H199.229H197.411H195.591H193.769H191.945H190.119H188.29H186.46H184.627H182.792H180.955H179.115H177.273H175.429H173.583H171.735H169.884H168.031H166.176H164.318H162.458H160.596H158.731H156.864H154.995H153.123H151.248H149.372H147.493H145.611H143.727H141.841H139.952H138.061H136.167H134.27H132.371H130.47H128.566H126.659H124.75H122.838H120.924H119.007H117.088H115.165H113.24H111.313H109.383H107.45H105.514H103.576H101.635H99.6915H97.745H95.7958H93.8439H91.8891H89.9316H87.9712H86.0081H84.0421H82.0733H80.1016H78.127H76.1496H74.1693H72.1861H70.2H68.2109H66.2189H64.224H62.2261H60.2252H58.2214H56.2145H54.2047H52.1918H50.1759H48.1569H46.1349H44.1098H42.0816H40.0503C18.6472 518.51 1.25 501.159 1.25 479.76V40C1.25 18.599 18.599 1.25 40 1.25Z" stroke="#6B7072" stroke-width="2.5"/>
    <line x1="200.697" y1="518.51" x2="383.067" y2="518.51" stroke="#ECF5F5" stroke-width="2.5"/>
    <line x1="983.904" y1="222.183" x2="983.904" y2="62.5636" stroke="#ECF5F5" stroke-width="2.5"/>
    <path d="M197.947 518.762L218.697 518.762C229.755 518.762 238.728 527.735 238.728 538.792L238.728 598.571" stroke="#6B7072" stroke-width="2.5"/>
    <path d="M237.844 612.884C238.332 613.372 239.124 613.372 239.612 612.884L247.567 604.929C248.055 604.441 248.055 603.649 247.567 603.161C247.079 602.673 246.287 602.673 245.799 603.161L238.728 610.232L231.657 603.161C231.169 602.673 230.377 602.673 229.889 603.161C229.401 603.649 229.401 604.441 229.889 604.929L237.844 612.884ZM237.478 571.895V612H239.978V571.895H237.478Z" fill="#6B7072"/>
    <path d="M984.014 60.9594L984.014 76.6839C984.014 87.7175 992.95 96.6529 1003.98 96.6529L1075.2 96.6529" stroke="#6B7072" stroke-width="2.5"/>
    <path d="M1091.88 95.7689C1092.37 96.2571 1092.37 97.0486 1091.88 97.5367L1083.93 105.492C1083.44 105.98 1082.65 105.98 1082.16 105.492C1081.67 105.004 1081.67 104.212 1082.16 103.724L1089.23 96.6528L1082.16 89.5818C1081.67 89.0936 1081.67 88.3022 1082.16 87.814C1082.65 87.3258 1083.44 87.3258 1083.93 87.814L1091.88 95.7689ZM1045.18 95.4028H1091V97.9028H1045.18V95.4028Z" fill="#6B7072"/>
                </svg>
              </div>
          }
        </div>
        {/* <div className={`no1 ${activeStep === 1 ? 'on' : ''}`}> */}
        <div className="no1">
          <div className="no1Box">
            <p>원하는 동영상, 음성 파일을 드래그하여 넣으세요!</p>
            <button className="fileSelect" onClick={() => document.querySelector('.uploadBox input').click()}>파일선택</button>
          </div>
        </div>
        <div className="no2">
          <div className="no2Box">
            <p>뚝딱이가 영상의 자막을<br />생성합니다!</p>
          </div>
        </div>
        <div className="no3">
          <div className="no3Box">
            <p>{fileInfo.name}</p>
            <p>{fileInfo.length}</p>
            <p>{fileInfo.language}</p>
            <button className="uploadButton">번역시작</button>
          </div>
        </div>
        <div className="no4">
          <div className="no4Box">
            <p>원하는 언어를<br />선택해 주세요</p>
            <button className='en' id='en'>영어</button>
            <button className='cn' id='cn'>중국어</button>
            <button className='jp' id='jp'>일본어</button>
            <button className='ru' id='ru'>러시아어</button>
            <button className='sp' id='sp'>스페인어</button>
          </div>
        </div>
        <div className="no5 on">
          <div className="no5Box">
            <p>다운로드 받을 포멧을 선택해 주세요</p>
            <button className="formetSelet" id='txt'>.txt</button>
            <button className="formetSelet" id='srt'>.srt</button>
            <button className="formetSelet" id='csv'>.csv</button>
          </div>
        </div>
        <div className="no6 on">
          <div className="no6Box">
            <ul>
              <li>
                <p className='timeline'>0:00</p>
                <p className="subtitle">Good to see you again, guys!
                Welcome back to my channel.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Translate