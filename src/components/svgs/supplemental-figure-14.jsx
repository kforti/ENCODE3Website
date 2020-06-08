import React, { useState } from "react";

import { Tooltip } from 'react-svg-tooltip';
import { EXPERIMENTS } from './experiments';

const LINK = (id) => `https://encode3-companion.s3.us-east-2.amazonaws.com/Figures/SupplementaryFigures/supp_figure_14_images/${id}.png`

const InteractiveImage = (props) => {
  const [ visibility, setVisibility ] = useState("hidden");
  return(
        <g clipPath={props.clipPath}>
          
          <rect transform={props.transform} width={props.width}  height={props.height} fill="black" strokeWidth="15" visibility={visibility}/> 
          <image
            onMouseOver={(e) => {setVisibility("visible")}}
            onMouseLeave={() => {setVisibility("hidden")}}
            onClick={() => {window.open( 
              `https://enhancer.lbl.gov/cgi-bin/imagedb3.pl?form=presentation&show=1&experiment_id=${props.experimentId.replace("mm", "")}&organism_id=2`, "_blank");}}
            overflow="visible"
            width={props.width}
            height={props.height}
            href={LINK(props.experimentId)}
            transform={props.transform}
          />
     </g>
  )
}

function SvgSupplementaryFigure14(props) {
  const textRef = React.createRef();
  const textOverlay = (ref) => {
    return(
      <Tooltip triggerRef={ref} >
        <rect x={2} y={2} width={165} height={20} rx={.5} ry={.5} fill='black'/>
        <text x={10} y={15} fontSize={11} fill='white'>Click to view on VISTA browser</text>
      </Tooltip> 
    )
  }

  const createRefs = (experiments) => {
    for (let [key, value] of Object.entries(experiments)) {
      value.ref = React.createRef();
    }
  }
  // useEffect(() => {
  //   createRefs(EXPERIMENTS)
  // }, [])

  return (
    <svg width="297mm" height="210mm" viewBox="0 0 1052.362 744.095" {...props}>       
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-320.353}
        y={67.148}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        
      >
        {"Top"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 277.813v66.463"
      />
      <text
        transform="rotate(-90)"
        fontSize={17.5}
        x={-418.362}
        y={37.276}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"hindbrain"}
      </text>
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-404.546}
        y={67.148}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Middle"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 355.401v66.465"
      />
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#82ca3f"
        strokeWidth={2.315}
        d="M46.498 278.453v220.36"
      />
      <text
        transform="rotate(-90)"
        fontSize={17.5}
        x={-183.451}
        y={37.276}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"midbrain"}
      </text>
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-172.728}
        y={67.148}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Middle"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 123.583v66.465"
      />
      <path
        strokeMiterlimit={10}
        fill="#149fec"
        stroke="#149fec"
        strokeWidth={2.315}
        d="M46.498 46.635v220.36"
      />
      <text
        transform="rotate(-90)"
        fontSize={17.5}
        x={-634.49}
        y={37.276}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"limb"}
      </text>
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-550.914}
        y={67.148}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Top"}
      </text>
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-635.349}
        y={67.148}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Middle"}
      </text>
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-713.125}
        y={67.148}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Bottom"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 508.374v66.464M75.919 586.203v66.466M75.919 662.779v66.464"
      />
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#f58b0e"
        strokeWidth={2.315}
        d="M46.498 509.257v220.359"
      />
      {/* 1444 */}
      <g transform={"matrix(.77171 0 0 .77171 49.356 277.813)"} ref={EXPERIMENTS.mm1444.ref}>
      <defs>
        <path
          id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__a"
          d="M47.565.062h61v72h-61z"
        />
      </defs>
      <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__b">
      
        <use
          xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__a"
          overflow="visible"
          width="100%"
          height="100%"
        />
      </clipPath>
      <InteractiveImage
                  clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__b)"
                  overflow="visible"
                  width={1146}
                  height={1366}
                  transform="matrix(.0532 0 0 .0527 47.565 .063)"
                  experimentId={EXPERIMENTS.mm1444.id}
                />
        </g>
        {textOverlay(EXPERIMENTS.mm1444.ref)}  
      {/* 1496 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 277.813)" ref={EXPERIMENTS.mm1496.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__g"
            d="M117.26.062h55v72h-55z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__h">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__g"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__h)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__i"
              d="M28.26.062h609.001v210H28.26z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__j">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__i"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__j)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__k"
                d="M117.26.062h55v72h-55z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__l">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__k"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
              <InteractiveImage
                clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__l)"
                overflow="visible"
                width={1020}
                height={1333}
                transform="matrix(.0532 0 0 .054 117.26 .063)"
                experimentId={EXPERIMENTS.mm1496.id}
              />
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1496.ref)} 
      {/* 1445 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 277.813)" ref={EXPERIMENTS.mm1445.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__m"
            d="M179.5.062h56v72h-56z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__n">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__m"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__n)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__o"
              d="M29.5.062h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__p">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__o"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__p)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__q"
                d="M179.5.062h56v72h-56z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__r">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__q"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
              <InteractiveImage
                clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__r)"
                overflow="visible"
                width={1310}
                height={1698}
                transform="matrix(.0427 0 0 .0424 179.5 .063)"
                experimentId={EXPERIMENTS.mm1445.id}
              />
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1445.ref)}
      {/* 1446 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 277.813)"  ref={EXPERIMENTS.mm1446.ref}>
      
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__s"
            d="M241.5.062h54v72h-54z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__t">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__s"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
      <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__t)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__u"
              d="M17.5.062h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__v">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__u"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__v)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__w"
                d="M241.5.062h54v72h-54z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__x">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__w"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__x)">
              <InteractiveImage
                overflow="visible"
                width={1352}
                height={1802}
                transform="matrix(.0399 0 0 .04 241.5 .063)"
                experimentId={EXPERIMENTS.mm1446.id}
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1446.ref)}
      {/* 1488 */}
      <g transform="matrix(.77171 0 0 .77171 81.356 277.813)" ref={EXPERIMENTS.mm1488.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__y"
            d="M300.5.062h62v72h-62z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__z">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__y"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__z)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__A"
              d="M7.5.062h609v210H7.5z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__B">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__A"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__B)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__C"
                d="M300.5.062h62v72h-62z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__D">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__C"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__D)">
              <InteractiveImage
                overflow="visible"
                width={1340}
                height={1546}
                transform="matrix(.0463 0 0 .0466 300.5 .063)"
                experimentId={EXPERIMENTS.mm1488.id}
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1488.ref)}
      {/* mm1447 */}
      <g transform="matrix(.77171 0 0 .77171 89.356 277.813)" ref={EXPERIMENTS.mm1447.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__E"
            d="M364.5.062h61v72h-61z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__F">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__E"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__F)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__G"
              d="M-17.5.062h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__H">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__G"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__H)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__I"
                d="M364.5.062h61v72h-61z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__J">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__I"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__J)">
              <InteractiveImage
                overflow="visible"
                width={1292}
                height={1530}
                transform="matrix(.0472 0 0 .0471 364.5 .063)"
                experimentId={EXPERIMENTS.mm1447.id}
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1447.ref)}
      {/* mm1449 */}
      <g transform="matrix(.77171 0 0 .77171 97.356 277.813)" ref={EXPERIMENTS.mm1449.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__K"
            d="M429.656.062h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__L">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__K"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__L)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__M"
              d="M-37.345.062h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__N">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__M"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__N)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__O"
                d="M429.656.062h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__P">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__O"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__P)">
              <InteractiveImage
                overflow="visible"
                width={1410}
                height={1710}
                transform="matrix(.0426 0 0 .0421 429.656 .063)"
                experimentId={EXPERIMENTS.mm1449.id}
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1449.ref)}
      {/* mm1497 */}
      <g transform="matrix(.77171 0 0 .77171 105.356 277.813)" ref={EXPERIMENTS.mm1497.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__Q"
            d="M494.426.062h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__R">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__Q"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__R)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__S"
              d="M-56.573.062h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__T">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__S"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__T)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__U"
                d="M494.426.062h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__V">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__U"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__V)">
              <InteractiveImage
                overflow="visible"
                width={1230}
                height={1562}
                transform="matrix(.0463 0 0 .0461 494.426 .063)"
                experimentId={EXPERIMENTS.mm1497.id}
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1497.ref)}
      {/* mm1498 */}
      <g transform="matrix(.77171 0 0 .77171 113.356 277.813)" ref={EXPERIMENTS.mm1498.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__W"
            d="M558 .062h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__X">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__W"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__X)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__Y"
              d="M556-111.938h609v210H556z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__Z">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__Y"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__Z)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aa"
                d="M558 .062h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ab">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aa"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ab)">
              <InteractiveImage
                overflow="visible"
                width={1396}
                height={1699}
                transform="matrix(.0423 0 0 .0424 558 .063)"
                experimentId={EXPERIMENTS.mm1498.id}
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1498.ref)}
      {/* mm1499 */}
      <g transform="matrix(.77171 0 0 .77171 121.356 277.813)" ref={EXPERIMENTS.mm1499.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ac"
            d="M626.417.062h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ad">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ac"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ad)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ae"
              d="M540.417-111.938h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__af">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ae"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__af)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ag"
                d="M626.417.062h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ah">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ag"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ah)">
              <InteractiveImage
                overflow="visible"
                width={1382}
                height={1766}
                experimentId={EXPERIMENTS.mm1499.id}
                transform="matrix(.0412 0 0 .0408 626.418 .063)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1499.ref)}
      
      {/* mm1451 */}
      <g transform="matrix(.77171 0 0 .77171 129.356 277.813)" ref={EXPERIMENTS.mm1451.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ai"
            d="M689.689.062h56v72h-56z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aj">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ai"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aj)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ak"
              d="M536.689-111.938h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__al">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ak"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__al)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__am"
                d="M689.689.062h56v72h-56z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__an">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__am"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__an)">
              <InteractiveImage
                overflow="visible"
                width={1386}
                height={1768}
                experimentId={EXPERIMENTS.mm1451.id}
                transform="matrix(.0404 0 0 .0407 689.689 .063)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1451.ref)}
      
      {/* mm1489 */}
      <g transform="matrix(.77171 0 0 .77171 137.356 277.813)" ref={EXPERIMENTS.mm1489.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ao"
            d="M757.46.062h52v72h-52z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ap">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ao"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ap)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aq"
              d="M533.46-111.938h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ar">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aq"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ar)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__as"
                d="M757.46.062h52v72h-52z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__at">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__as"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__at)">
              <InteractiveImage
                overflow="visible"
                width={1227}
                height={1702}
                experimentId={EXPERIMENTS.mm1489.id}
                transform="matrix(.0424 0 0 .0423 757.46 .063)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1489.ref)}
      
      {/* mm1452 */}
      <g transform="matrix(.77171 0 0 .77171 145.356 277.813)" ref={EXPERIMENTS.mm1452.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__au"
            d="M814.224.062h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__av">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__au"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__av)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aw"
              d="M512.224-111.938h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ax">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aw"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ax)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ay"
                d="M814.224.062h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__az">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ay"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__az)">
              <InteractiveImage
                overflow="visible"
                width={1384}
                height={1688}
                experimentId={EXPERIMENTS.mm1452.id}
                transform="matrix(.0426 0 0 .0427 814.224 .063)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1452.ref)}
      
      {/* mm1500 */}
      <g transform="matrix(.77171 0 0 .77171 153.356 277.813)" ref={EXPERIMENTS.mm1500.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aA"
            d="M876.631.062h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aB">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aA"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aB)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aC"
              d="M496.631-111.938h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aD">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aC"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aD)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aE"
                d="M876.631.062h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aF">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aE"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aF)">
              <InteractiveImage
                overflow="visible"
                width={994}
                height={1247}
                experimentId={EXPERIMENTS.mm1500.id}
                transform="matrix(.0573 0 0 .0577 876.631 .063)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1500.ref)}
      
      {/* mm1478 */}
      <g transform="matrix(.77171 0 0 .77171 161.356 277.813)" ref={EXPERIMENTS.mm1478.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aG"
            d="M937.288.062h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aH">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aG"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aH)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aI"
              d="M483.288-111.938h609v210h-609z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aJ">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aI"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aJ)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aK"
                d="M937.288.062h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aL">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aK"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aL)">
              <InteractiveImage
                overflow="visible"
                width={1324}
                height={1674}
                experimentId={EXPERIMENTS.mm1478.id}
                transform="matrix(.0431 0 0 .043 937.288 .063)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1478.ref)}
      
      {/* mm1534 */}
      <g transform="matrix(.77171 0 0 .77171 53.356 277.813)" ref={EXPERIMENTS.mm1534.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aM"
            transform="rotate(174.81 144.763 139.04)"
            d="M113.76 103.04h62v72h-62z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aN">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aM"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aN)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aO"
              transform="rotate(174.81 184.872 132.89)"
              d="M50.368 94.392h269v77h-269z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aP">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aO"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aP)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aQ"
                transform="rotate(174.81 144.763 139.04)"
                d="M113.76 103.04h62v72h-62z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aR">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aQ"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aR)">
              <InteractiveImage
                overflow="visible"
                width={1554}
                height={1782}
                experimentId={EXPERIMENTS.mm1534.id}
                transform="matrix(.0397 -.0036 .0036 .0402 110.635 105.988)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1534.ref)}
      
      {/* mm1540 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 277.813)" ref={EXPERIMENTS.mm1540.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aS"
            d="M178 103.041h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aT">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aS"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aT)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aU"
              d="M46 101.041h269v77H46z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aV">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aU"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aV)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aW"
                d="M178 103.041h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aX">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aW"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aX)">
              <InteractiveImage
                overflow="visible"
                width={1524}
                height={1840}
                experimentId={EXPERIMENTS.mm1540.id}
                transform="matrix(.0387 0 0 .0391 178 103.04)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1540.ref)}
      
      {/* mm1542 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 277.813)" ref={EXPERIMENTS.mm1542.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aY"
            d="M238 103.041h61v72h-61z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__aZ">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aY"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__aZ)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ba"
              d="M30 103.041h269v77H30z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bb">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ba"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bb)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bc"
                d="M238 103.041h61v72h-61z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bd">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bc"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bd)">
              <InteractiveImage
                overflow="visible"
                width={1512}
                height={1788}
                experimentId={EXPERIMENTS.mm1542.id}
                transform="translate(238 103.04) scale(.0403)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1542.ref)}
      
      {/* mm1532 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 277.813)" ref={EXPERIMENTS.mm1532.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__be"
            d="M51.065 103.041h54v72h-54z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bf">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__be"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bf)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bg"
              d="M51.065 100.041h269v77h-269z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bh">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bg"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bh)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bi"
                d="M51.065 103.041h54v72h-54z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bj">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bi"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bj)">
              <InteractiveImage
                overflow="visible"
                width={1630}
                height={2168}
                experimentId={EXPERIMENTS.mm1532.id}
                transform="matrix(.0331 0 0 .0332 51.065 103.04)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1532.ref)}
      
      {/* mm1577 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 277.813)" ref={EXPERIMENTS.mm1577.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bk"
            d="M51.565 201.082h53v72h-53z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bl">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bk"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bl)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bm"
              d="M51.565 201.082h193v75h-193z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bn">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bm"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bn)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bo"
                d="M51.565 201.082h53v72h-53z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bp">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bo"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bp)">
              <InteractiveImage
                overflow="visible"
                width={1546}
                height={2104}
                experimentId={EXPERIMENTS.mm1577.id}
                transform="matrix(.0343 0 0 .0342 51.565 201.082)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1577.ref)}
      
      {/* mm1515 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 277.813)" ref={EXPERIMENTS.mm1515.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bq"
            d="M116.26 201.082h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__br">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bq"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__br)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bs"
              d="M48.26 201.082h193v75h-193z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bt">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bs"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bt)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bu"
                d="M116.26 201.082h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bv">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bu"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bv)">
              <InteractiveImage
                overflow="visible"
                width={1330}
                height={1688}
                experimentId={EXPERIMENTS.mm1515.id}
                transform="matrix(.0429 0 0 .0427 116.26 201.082)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1515.ref)}
      
      {/* mm1604 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 277.813)" ref={EXPERIMENTS.mm1604.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bw"
            d="M178.5 204.082h58v72h-58z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bx">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bw"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bx)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__by"
              d="M43.5 201.082h193v75h-193z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bz">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__by"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bz)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bA"
                d="M178.5 204.082h58v72h-58z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bB">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bA"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bB)">
              <InteractiveImage
                overflow="visible"
                width={1722}
                height={2136}
                experimentId={EXPERIMENTS.mm1604.id}
                transform="translate(178.5 204.082) scale(.0337)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1604.ref)}
      
      {/* mm1462 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 -186.855)" ref={EXPERIMENTS.mm1462.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bC"
            d="M46.065 302.49h64v72h-64z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bD">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bC"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bD)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bE"
              d="M41.065 302.49h552.001v175H41.065z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bF">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bE"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bF)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bG"
                d="M46.065 302.49h64v72h-64z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bH">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bG"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bH)">
              <InteractiveImage
                overflow="visible"
                width={1436}
                height={1634}
                experimentId={EXPERIMENTS.mm1462.id}
                transform="matrix(.0446 0 0 .0441 46.065 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1462.ref)}
      
      {/* mm1454 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 -186.855)" ref={EXPERIMENTS.mm1454.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bI"
            d="M114.76 302.49h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bJ">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bI"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bJ)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bK"
              d="M35.76 301.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bL">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bK"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bL)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bM"
                d="M114.76 302.49h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bN">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bM"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bN)">
              <InteractiveImage
                overflow="visible"
                width={1272}
                height={1516}
                experimentId={EXPERIMENTS.mm1454.id}
                transform="matrix(.0472 0 0 .0475 114.76 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1454.ref)}
      
      {/* mm1469 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 -186.855)" ref={EXPERIMENTS.mm1469.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bO"
            d="M178.5 302.49h58v72h-58z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bP">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bO"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bP)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bQ"
              d="M29.5 302.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bR">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bQ"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bR)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bS"
                d="M178.5 302.49h58v72h-58z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bT">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bS"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bT)">
              <InteractiveImage
                overflow="visible"
                width={1264}
                height={1570}
                experimentId={EXPERIMENTS.mm1469.id}
                transform="translate(178.5 302.49) scale(.0459)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1469.ref)}
      
      {/* mm1456 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 -186.855)"ref={EXPERIMENTS.mm1456.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bU"
            d="M239 302.49h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bV">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bU"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bV)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bW"
              d="M23 302.49h552v175H23z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bX">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bW"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bX)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bY"
                d="M239 302.49h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__bZ">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bY"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__bZ)">
              <InteractiveImage
                overflow="visible"
                width={1294}
                height={1570}
                experimentId={EXPERIMENTS.mm1456.id}
                transform="matrix(.0456 0 0 .0459 239 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1456.ref)}
      
      {/* mm1502 */}
      <g transform="matrix(.77171 0 0 .77171 81.356 -186.855)"ref={EXPERIMENTS.mm1502.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ca"
            d="M302 302.49h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cb">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ca"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cb)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cc"
              d="M18 301.49h552v175H18z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cd">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cc"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cd)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ce"
                d="M302 302.49h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cf">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ce"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cf)">
              <InteractiveImage
                overflow="visible"
                width={1079}
                height={1309}
                experimentId={EXPERIMENTS.mm1502.id}
                transform="matrix(.0547 0 0 .055 302 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1502.ref)}
      
      {/* mm1480 */}
      <g transform="matrix(.77171 0 0 .77171 89.356 -186.855)"ref={EXPERIMENTS.mm1480.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cg"
            d="M365.5 302.49h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ch">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cg"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ch)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ci"
              d="M13.5 302.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cj">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ci"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cj)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ck"
                d="M365.5 302.49h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cl">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ck"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cl)">
              <InteractiveImage
                overflow="visible"
                width={1502}
                height={1848}
                experimentId={EXPERIMENTS.mm1480.id}
                transform="matrix(.0393 0 0 .039 365.5 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1480.ref)}
      
      {/* mm1503 */}
      <g transform="matrix(.77171 0 0 .77171 97.356 -186.855)"ref={EXPERIMENTS.mm1503.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cm"
            d="M433.156 302.49h53v72h-53z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cn">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cm"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cn)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__co"
              d="M13.155 301.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cp">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__co"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cp)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cq"
                d="M433.156 302.49h53v72h-53z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cr">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cq"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cr)">
              <InteractiveImage
                overflow="visible"
                width={1095}
                height={1489}
                experimentId={EXPERIMENTS.mm1503.id}
                transform="translate(433.156 302.49) scale(.0484)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1503.ref)}
      
      {/* mm1504 */}
      <g transform="matrix(.77171 0 0 .77171 105.356 -186.855)"ref={EXPERIMENTS.mm1504.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cs"
            d="M492.926 302.49h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ct">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cs"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ct)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cu"
              d="M.927 300.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cv">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cu"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cv)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cw"
                d="M492.926 302.49h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cx">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cw"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cx)">
              <InteractiveImage
                overflow="visible"
                width={1492}
                height={1784}
                experimentId={EXPERIMENTS.mm1504.id}
                transform="matrix(.0402 0 0 .0404 492.926 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1504.ref)}
      
      {/* mm1471 */}
      <g transform="matrix(.77171 0 0 .77171 113.356 -186.855)"ref={EXPERIMENTS.mm1471.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cy"
            d="M557 302.49h61v72h-61z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cz">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cy"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cz)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cA"
              d="M557 201.49h552v175H557z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cB">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cA"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cB)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cC"
                d="M557 302.49h61v72h-61z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cD">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cC"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cD)">
              <InteractiveImage
                overflow="visible"
                width={1354}
                height={1582}
                experimentId={EXPERIMENTS.mm1471.id}
                transform="matrix(.0451 0 0 .0455 557 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1471.ref)}
      
      {/* mm1458 */}
      <g transform="matrix(.77171 0 0 .77171 121.356 -186.855)"ref={EXPERIMENTS.mm1458.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cE"
            d="M624.417 302.49h61v72h-61z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cF">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cE"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cF)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cG"
              d="M551.417 201.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cH">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cG"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cH)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cI"
                d="M624.417 302.49h61v72h-61z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cJ">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cI"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cJ)">
              <InteractiveImage
                overflow="visible"
                width={1395}
                height={1633}
                experimentId={EXPERIMENTS.mm1458.id}
                transform="matrix(.0437 0 0 .0441 624.418 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1458.ref)}
      
      {/* mm1460 */}
      <g transform="matrix(.77171 0 0 .77171 129.356 -186.855)"ref={EXPERIMENTS.mm1460.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cK"
            d="M686.189 302.49h63v72h-63z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cL">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cK"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cL)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cM"
              d="M542.189 199.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cN">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cM"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cN)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cO"
                d="M686.189 302.49h63v72h-63z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cP">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cO"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cP)">
              <InteractiveImage
                overflow="visible"
                width={1580}
                height={1816}
                experimentId={EXPERIMENTS.mm1460.id}
                transform="matrix(.0399 0 0 .0396 686.189 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1460.ref)}
      
      {/* mm1461 */}
      <g transform="matrix(.77171 0 0 .77171 137.356 -186.855)"ref={EXPERIMENTS.mm1461.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cQ"
            d="M754.96 302.49h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cR">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cQ"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cR)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cS"
              d="M533.96 204.49h552v175h-552z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cT">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cS"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cT)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cU"
                d="M754.96 302.49h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cV">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cU"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cV)">
              <InteractiveImage
                overflow="visible"
                width={1484}
                height={1902}
                experimentId={EXPERIMENTS.mm1461.id}
                transform="matrix(.0384 0 0 .0379 754.96 302.49)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1461.ref)}
      
      {/* mm1546 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 -186.855)"ref={EXPERIMENTS.mm1546.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cW"
            d="M48.065 403.271h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cX">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cW"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cX)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cY"
              d="M48.065 402.271h444.001v75H48.065z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__cZ">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cY"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__cZ)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__da"
                d="M48.065 403.271h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__db">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__da"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__db)">
              <InteractiveImage
                overflow="visible"
                width={1842}
                height={2194}
                experimentId={EXPERIMENTS.mm1546.id}
                transform="matrix(.0326 0 0 .0328 48.065 403.272)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1546.ref)}
      
      {/* mm1552 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 -186.855)"ref={EXPERIMENTS.mm1552.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dc"
            d="M114.76 403.271h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dd">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dc"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dd)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__de"
              d="M48.76 403.271h444v75h-444z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__df">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__de"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__df)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dg"
                d="M114.76 403.271h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dh">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dg"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dh)">
              <InteractiveImage
                overflow="visible"
                width={1548}
                height={1865}
                experimentId={EXPERIMENTS.mm1552.id}
                transform="matrix(.0388 0 0 .0386 114.76 403.272)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1552.ref)}
      
      {/* mm1553 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 -186.855)"ref={EXPERIMENTS.mm1553.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__di"
            d="M179 403.271h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dj">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__di"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dj)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dk"
              d="M34 400.271h444v75H34z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dl">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dk"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dl)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dm"
                d="M179 403.271h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dn">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dm"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dn)">
              <InteractiveImage
                overflow="visible"
                width={1470}
                height={1856}
                experimentId={EXPERIMENTS.mm1553.id}
                transform="translate(179 403.272) scale(.0388)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1553.ref)}
      
      {/* mm1555 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 -186.855)"ref={EXPERIMENTS.mm1555.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__do"
            d="M239.5 403.271h58v72h-58z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dp">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__do"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dp)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dq"
              d="M14.5 403.271h444v75h-444z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dr">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dq"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dr)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ds"
                d="M239.5 403.271h58v72h-58z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dt">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ds"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dt)">
              <InteractiveImage
                overflow="visible"
                width={1492}
                height={1868}
                experimentId={EXPERIMENTS.mm1555.id}
                transform="matrix(.0389 0 0 .0385 239.5 403.272)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1555.ref)}
      
      {/* mm1557 */}
      <g transform="matrix(.77171 0 0 .77171 81.356 -186.855)"ref={EXPERIMENTS.mm1557.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__du"
            d="M301 403.271h61v72h-61z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dv">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__du"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dv)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dw"
              d="M-2 403.271h444v75H-2z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dx">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dw"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dx)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dy"
                d="M301 403.271h61v72h-61z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dz">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dy"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dz)">
              <InteractiveImage
                overflow="visible"
                width={1754}
                height={2078}
                experimentId={EXPERIMENTS.mm1557.id}
                transform="matrix(.0348 0 0 .0346 301 403.272)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1557.ref)}
      
      {/* mm1558 */}
      <g transform="matrix(.77171 0 0 .77171 89.356 -186.855)"ref={EXPERIMENTS.mm1558.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dA"
            d="M365.5 403.271h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dB">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dA"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dB)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dC"
              d="M-19.5 401.271h444v75h-444z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dD">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dC"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dD)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dE"
                d="M365.5 403.271h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dF">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dE"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dF)">
              <InteractiveImage
                overflow="visible"
                width={1864}
                height={2289}
                experimentId={EXPERIMENTS.mm1558.id}
                transform="matrix(.0317 0 0 .0315 365.5 403.272)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1558.ref)}
      
      {/* mm1583 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 -186.855)"ref={EXPERIMENTS.mm1583.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dG"
            d="M116.26 502.25h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dH">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dG"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dH)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dI"
              d="M39.26 500.25h302v78h-302z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dJ">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dI"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dJ)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dK"
                d="M116.26 502.25h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dL">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dK"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dL)">
              <InteractiveImage
                overflow="visible"
                width={1774}
                height={2252}
                experimentId={EXPERIMENTS.mm1583.id}
                transform="matrix(.0321 0 0 .032 116.26 502.25)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1583.ref)}
      
      {/* mm1524 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 -186.855)"ref={EXPERIMENTS.mm1524.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dM"
            d="M179 502.25h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dN">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dM"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dN)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dO"
              d="M22 498.25h302v78H22z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dP">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dO"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dP)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dQ"
                d="M179 502.25h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dR">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dQ"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dR)">
              <InteractiveImage
                overflow="visible"
                width={1050}
                height={1326}
                experimentId={EXPERIMENTS.mm1524.id}
                transform="translate(179 502.25) scale(.0543)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1524.ref)}
      
      {/* mm1526 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 -186.855)"ref={EXPERIMENTS.mm1526.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dS"
            d="M239 502.25h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dT">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dS"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dT)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dU"
              d="M-4 496.25h302v78H-4z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dV">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dU"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dV)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dW"
                d="M239 502.25h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dX">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dW"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dX)">
              <InteractiveImage
                overflow="visible"
                width={1406}
                height={1724}
                experimentId={EXPERIMENTS.mm1526.id}
                transform="matrix(.042 0 0 .0418 239 502.25)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1526.ref)}
      
      {/* mm1464 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 44.252)"ref={EXPERIMENTS.mm1464.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dY"
            d="M49.565 602.954h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__dZ">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dY"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__dZ)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ea"
              d="M49.565 602.954h631.001v76H49.565z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eb">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ea"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eb)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ec"
                d="M49.565 602.954h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ed">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ec"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ed)">
              <InteractiveImage
                overflow="visible"
                width={1314}
                height={1648}
                experimentId={EXPERIMENTS.mm1464.id}
                transform="matrix(.0434 0 0 .0437 49.565 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1464.ref)}
      
      {/* mm1473 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 44.252)"ref={EXPERIMENTS.mm1473.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ee"
            d="M116.76 602.954h56v72h-56z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ef">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ee"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ef)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eg"
              d="M45.76 602.954h631v76h-631z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eh">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eg"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eh)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ei"
                d="M116.76 602.954h56v72h-56z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ej">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ei"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ej)">
              <InteractiveImage
                overflow="visible"
                width={1360}
                height={1730}
                experimentId={EXPERIMENTS.mm1473.id}
                transform="matrix(.0412 0 0 .0416 116.76 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1473.ref)}
      
      {/* mm1474 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 44.252)"ref={EXPERIMENTS.mm1474.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ek"
            d="M180 602.954h55v72h-55z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__el">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ek"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__el)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__em"
              d="M39 601.954h631v76H39z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__en">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__em"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__en)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eo"
                d="M180 602.954h55v72h-55z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ep">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eo"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ep)">
              <InteractiveImage
                overflow="visible"
                width={1294}
                height={1676}
                experimentId={EXPERIMENTS.mm1474.id}
                transform="matrix(.0425 0 0 .043 180 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1474.ref)}
      
      {/* mm1493 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 44.252)"ref={EXPERIMENTS.mm1493.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eq"
            d="M239 602.954h59v72h-59z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__er">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eq"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__er)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__es"
              d="M29 602.954h631v76H29z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__et">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__es"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__et)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eu"
                d="M239 602.954h59v72h-59z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ev">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eu"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ev)">
              <InteractiveImage
                overflow="visible"
                width={1068}
                height={1299}
                experimentId={EXPERIMENTS.mm1493.id}
                transform="matrix(.0552 0 0 .0554 239 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1493.ref)}
      
      {/* mm1475 */}
      <g transform="matrix(.77171 0 0 .77171 81.356 44.252)"ref={EXPERIMENTS.mm1475.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ew"
            d="M300.5 602.954h62v72h-62z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ex">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ew"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ex)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ey"
              d="M19.5 601.954h631v76h-631z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ez">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ey"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ez)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eA"
                d="M300.5 602.954h62v72h-62z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eB">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eA"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eB)">
              <InteractiveImage
                overflow="visible"
                width={1356}
                height={1580}
                experimentId={EXPERIMENTS.mm1475.id}
                transform="matrix(.0457 0 0 .0456 300.5 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1475.ref)}
      
      {/* mm1483 */}
      <g transform="matrix(.77171 0 0 .77171 89.356 44.252)"ref={EXPERIMENTS.mm1483.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eC"
            d="M366.5 602.954h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eD">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eC"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eD)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eE"
              d="M13.5 601.954h631v76h-631z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eF">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eE"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eF)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eG"
                d="M366.5 602.954h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eH">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eG"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eH)">
              <InteractiveImage
                overflow="visible"
                width={1374}
                height={1752}
                experimentId={EXPERIMENTS.mm1483.id}
                transform="matrix(.0415 0 0 .0411 366.5 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1483.ref)}
      
      {/* mm1505 */}
      <g transform="matrix(.77171 0 0 .77171 97.356 44.252)"ref={EXPERIMENTS.mm1505.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eI"
            d="M429.656 602.954h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eJ">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eI"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eJ)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eK"
              d="M6.655 602.954h631v76h-631z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eL">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eK"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eL)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eM"
                d="M429.656 602.954h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eN">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eM"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eN)">
              <InteractiveImage
                overflow="visible"
                width={1316}
                height={1582}
                experimentId={EXPERIMENTS.mm1505.id}
                transform="matrix(.0456 0 0 .0455 429.656 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1505.ref)}
      
      {/* mm1506 */}
      <g transform="matrix(.77171 0 0 .77171 105.356 44.252)"ref={EXPERIMENTS.mm1506.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eO"
            d="M492.426 602.954h61v72h-61z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eP">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eO"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eP)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eQ"
              d="M-7.573 600.954h631v76h-631z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eR">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eQ"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eR)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eS"
                d="M492.426 602.954h61v72h-61z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eT">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eS"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eT)">
              <InteractiveImage
                overflow="visible"
                width={1308}
                height={1536}
                experimentId={EXPERIMENTS.mm1506.id}
                transform="matrix(.0466 0 0 .0469 492.426 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1506.ref)}
      
      {/* mm1476 */}
      <g transform="matrix(.77171 0 0 .77171 113.356 44.252)"ref={EXPERIMENTS.mm1476.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eU"
            d="M560 602.954h55v72h-55z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eV">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eU"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eV)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eW"
              d="M-16 598.954h631v76H-16z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eX">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eW"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eX)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eY"
                d="M560 602.954h55v72h-55z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__eZ">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eY"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__eZ)">
              <InteractiveImage
                overflow="visible"
                width={1384}
                height={1810}
                experimentId={EXPERIMENTS.mm1476.id}
                transform="matrix(.0397 0 0 .0398 560 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1476.ref)}
      
      {/* mm1490 */}
      <g transform="matrix(.77171 0 0 .77171 121.356 44.252)"ref={EXPERIMENTS.mm1490.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fa"
            d="M624.917 602.954h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fb">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fa"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fb)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fc"
              d="M624.917 599.954h337v75h-337z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fd">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fc"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fd)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fe"
                d="M624.917 602.954h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ff">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fe"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ff)">
              <InteractiveImage
                overflow="visible"
                width={1304}
                height={1574}
                experimentId={EXPERIMENTS.mm1490.id}
                transform="matrix(.046 0 0 .0457 624.918 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1490.ref)}
      
      {/* mm1492 */}
      <g transform="matrix(.77171 0 0 .77171 129.356 44.252)"ref={EXPERIMENTS.mm1492.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fg"
            d="M690.189 602.954h55v72h-55z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fh">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fg"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fh)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fi"
              d="M617.189 599.954h337v75h-337z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fj">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fi"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fj)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fk"
                d="M690.189 602.954h55v72h-55z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fl">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fk"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fl)">
              <InteractiveImage
                overflow="visible"
                width={1326}
                height={1738}
                experimentId={EXPERIMENTS.mm1492.id}
                transform="matrix(.0415 0 0 .0414 690.189 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1492.ref)}
      
      {/* mm1484 */}
      <g transform="matrix(.77171 0 0 .77171 137.356 44.252)"ref={EXPERIMENTS.mm1484.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fm"
            d="M753.46 602.954h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fn">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fm"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fn)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fo"
              d="M614.46 599.954h337v75h-337z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fp">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fo"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fp)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fq"
                d="M753.46 602.954h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fr">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fq"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fr)">
              <InteractiveImage
                overflow="visible"
                width={1398}
                height={1672}
                experimentId={EXPERIMENTS.mm1484.id}
                transform="matrix(.0429 0 0 .0431 753.46 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1484.ref)}
      
      {/* mm1485 */}
      <g transform="matrix(.77171 0 0 .77171 145.356 44.252)"ref={EXPERIMENTS.mm1485.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fs"
            d="M815.724 602.954h56v72h-56z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ft">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fs"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ft)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fu"
              d="M604.724 601.954h337v75h-337z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fv">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fu"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fv)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fw"
                d="M815.724 602.954h56v72h-56z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fx">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fw"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fx)">
              <InteractiveImage
                overflow="visible"
                width={1256}
                height={1606}
                experimentId={EXPERIMENTS.mm1485.id}
                transform="matrix(.0446 0 0 .0448 815.724 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1485.ref)}
      
      {/* mm1486 */}
      <g transform="matrix(.77171 0 0 .77171 153.356 44.252)"ref={EXPERIMENTS.mm1486.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fy"
            d="M876.131 602.954h58v72h-58z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fz">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fy"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fz)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fA"
              d="M597.131 602.954h337v75h-337z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fB">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fA"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fB)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fC"
                d="M876.131 602.954h58v72h-58z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fD">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fC"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fD)">
              <InteractiveImage
                overflow="visible"
                width={1202}
                height={1510}
                experimentId={EXPERIMENTS.mm1486.id}
                transform="matrix(.0483 0 0 .0477 876.131 602.954)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1486.ref)}
      
      {/* mm1564 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 44.252)"ref={EXPERIMENTS.mm1564.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fE"
            d="M50.065 703.104h56v72h-56z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fF">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fE"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fF)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fG"
              d="M50.065 703.104h450.001v79H50.065z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fH">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fG"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fH)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fI"
                d="M50.065 703.104h56v72h-56z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fJ">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fI"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fJ)">
              <InteractiveImage
                overflow="visible"
                width={1530}
                height={1978}
                experimentId={EXPERIMENTS.mm1564.id}
                transform="matrix(.0366 0 0 .0364 50.065 703.105)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1564.ref)}
      
      {/* mm1567 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 44.252)"ref={EXPERIMENTS.mm1567.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fK"
            d="M117.76 703.104h54v72h-54z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fL">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fK"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fL)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fM"
              d="M44.76 701.104h450v79h-450z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fN">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fM"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fN)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fO"
                d="M117.76 703.104h54v72h-54z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fP">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fO"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fP)">
              <InteractiveImage
                overflow="visible"
                width={1346}
                height={1781}
                experimentId={EXPERIMENTS.mm1567.id}
                transform="matrix(.0401 0 0 .0404 117.76 703.105)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1567.ref)}
      
      {/* mm1570 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 44.252)"ref={EXPERIMENTS.mm1570.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fQ"
            d="M181.5 703.104h52v72h-52z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fR">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fQ"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fR)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fS"
              d="M30.5 703.104h450v79h-450z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fT">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fS"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fT)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fU"
                d="M181.5 703.104h52v72h-52z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fV">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fU"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fV)">
              <InteractiveImage
                overflow="visible"
                width={1602}
                height={2217}
                experimentId={EXPERIMENTS.mm1570.id}
                transform="translate(181.5 703.105) scale(.0325)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1570.ref)}
      
      {/* mm1571 */}
      <g transform="matrix(.77171 0 0 .77171 73.356 44.252)"ref={EXPERIMENTS.mm1571.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fW"
            d="M240 703.104h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fX">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fW"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fX)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fY"
              d="M7 696.104h450v79H7z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__fZ">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fY"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__fZ)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ga"
                d="M240 703.104h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gb">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ga"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gb)">
              <InteractiveImage
                overflow="visible"
                width={1836}
                height={2308}
                experimentId={EXPERIMENTS.mm1571.id}
                transform="matrix(.031 0 0 .0312 240 703.105)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1571.ref)}
      
      {/* mm1574 */}
      <g transform="matrix(.77171 0 0 .77171 81.356 44.252)"ref={EXPERIMENTS.mm1574.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gc"
            d="M304 703.104h55v72h-55z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gd">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gc"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gd)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__ge"
              d="M1 699.104h450v79H1z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gf">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__ge"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gf)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gg"
                d="M304 703.104h55v72h-55z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gh">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gg"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gh)">
              <InteractiveImage
                overflow="visible"
                width={1410}
                height={1860}
                experimentId={EXPERIMENTS.mm1574.id}
                transform="matrix(.039 0 0 .0387 304 703.105)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1574.ref)}
      
      {/* mm1576 */}
      <g transform="matrix(.77171 0 0 .77171 89.356 44.252)"ref={EXPERIMENTS.mm1576.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gi"
            d="M364 703.104h62v72h-62z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gj">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gi"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gj)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gk"
              d="M-24 699.104h450v79H-24z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gl">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gk"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gl)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gm"
                d="M364 703.104h62v72h-62z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gn">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gm"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gn)">
              <InteractiveImage
                overflow="visible"
                width={1732}
                height={2010}
                experimentId={EXPERIMENTS.mm1576.id}
                transform="translate(364 703.105) scale(.0358)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1576.ref)}
      
      {/* mm1597 */}
      <g transform="matrix(.77171 0 0 .77171 49.356 44.252)"ref={EXPERIMENTS.mm1597.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__go"
            d="M48.065 800.823h60v72h-60z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gp">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__go"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gp)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gq"
              d="M48.065 796.823h227v76h-227z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gr">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gq"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gr)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gs"
                d="M48.065 800.823h60v72h-60z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gt">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gs"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gt)">
              <InteractiveImage
                overflow="visible"
                width={1776}
                height={2146}
                experimentId={EXPERIMENTS.mm1597.id}
                transform="matrix(.0338 0 0 .0336 48.065 800.823)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1597.ref)}
      
      {/* mm1598 */}
      <g transform="matrix(.77171 0 0 .77171 57.356 44.252)"ref={EXPERIMENTS.mm1598.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gu"
            d="M115.76 800.823h58v72h-58z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gv">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gu"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gv)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gw"
              d="M29.76 796.823h227v76h-227z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gx">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gw"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gx)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gy"
                d="M115.76 800.823h58v72h-58z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gz">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gy"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gz)">
              <InteractiveImage
                overflow="visible"
                width={1660}
                height={2066}
                experimentId={EXPERIMENTS.mm1598.id}
                transform="matrix(.0349 0 0 .0348 115.76 800.823)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1598.ref)}
      
      {/* mm1599 */}
      <g transform="matrix(.77171 0 0 .77171 65.356 44.252)" ref={EXPERIMENTS.mm1522.ref}>
        <defs>
          <path
            id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gA"
            d="M179 800.823h57v72h-57z"
          />
        </defs>
        <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gB">
          <use
            xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gA"
            overflow="visible"
            width="100%"
            height="100%"
          />
        </clipPath>
        <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gB)">
          <defs>
            <path
              id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gC"
              d="M9 800.823h227v76H9z"
            />
          </defs>
          <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gD">
            <use
              xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gC"
              overflow="visible"
              width="100%"
              height="100%"
            />
          </clipPath>
          <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gD)">
            <defs>
              <path
                id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gE"
                d="M179 800.823h57v72h-57z"
              />
            </defs>
            <clipPath id="Supplementary-Figure-14-transgenic-mouse-embryos_svg__gF">
              <use
                xlinkHref="#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gE"
                overflow="visible"
                width="100%"
                height="100%"
              />
            </clipPath>
            <g clipPath="url(#Supplementary-Figure-14-transgenic-mouse-embryos_svg__gF)">
              <InteractiveImage
                overflow="visible"
                width={1460}
                height={1826}
                experimentId={EXPERIMENTS.mm1599.id}
                transform="matrix(.039 0 0 .0394 179 800.823)"
              />
            </g>
          </g>
        </g>
      </g>
      {textOverlay(EXPERIMENTS.mm1599.ref)}
      
      {/* mm1522 */}
      <g ref={EXPERIMENTS.mm1522.ref}>
      <InteractiveImage
        overflow="visible"
        width={1226}
        height={1554}
        experimentId={EXPERIMENTS.mm1522.id}
        transform="translate(88.454 200.738) scale(.03573)"
      />
      </g>
      {textOverlay(EXPERIMENTS.mm1522.ref)}

      <text
        fontSize={12.5}
        x={108.23}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1444"}
      </text>
      <text
        fontSize={12.5}
        x={165.975}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1496"}
      </text>
      <text
        fontSize={12.5}
        x={222.69}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1445"}
      </text>
      <text
        fontSize={12.5}
        x={279.191}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1446"}
      </text>
      <text
        fontSize={12.5}
        x={335.954}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1488"}
      </text>
      <text
        fontSize={12.5}
        x={393.744}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1447"}
      </text>
      <text
        fontSize={12.5}
        x={449.2}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1449"}
      </text>
      <text
        fontSize={12.5}
        x={506.705}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1497"}
      </text>
      <text
        fontSize={12.5}
        x={565.771}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1498"}
      </text>
      <text
        fontSize={12.5}
        x={623.814}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1499"}
      </text>
      <text
        fontSize={12.5}
        x={681.838}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1451"}
      </text>
      <text
        fontSize={12.5}
        x={740.371}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1489"}
      </text>
      <text
        fontSize={12.5}
        x={794.937}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1452"}
      </text>
      <text
        fontSize={12.5}
        x={850.324}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1500"}
      </text>
      <text
        fontSize={12.5}
        x={906.732}
        y={343.934}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1478"}
      </text>
      <text
        fontSize={12.5}
        x={108.133}
        y={421.866}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1532"}
      </text>
      <text
        fontSize={12.5}
        x={165.957}
        y={421.866}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1534"}
      </text>
      <text
        fontSize={12.5}
        x={222.713}
        y={421.866}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1540"}
      </text>
      <text
        fontSize={12.5}
        x={279.075}
        y={421.866}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1542"}
      </text>
      <text
        fontSize={12.5}
        x={108.488}
        y={498.813}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1577"}
      </text>
      <text
        fontSize={12.5}
        x={168.205}
        y={498.813}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1515"}
      </text>
      <text
        fontSize={12.5}
        x={225.11}
        y={498.813}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1604"}
      </text>
      <text
        fontSize={12.5}
        x={108.42}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1462"}
      </text>
      <text
        fontSize={12.5}
        x={168.35}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1454"}
      </text>
      <text
        fontSize={12.5}
        x={225.045}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1469"}
      </text>
      <text
        fontSize={12.5}
        x={281.533}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1456"}
      </text>
      <text
        fontSize={12.5}
        x={338.139}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1502"}
      </text>
      <text
        fontSize={12.5}
        x={396.117}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1480"}
      </text>
      <text
        fontSize={12.5}
        x={451.505}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1503"}
      </text>
      <text
        fontSize={12.5}
        x={509.125}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1504"}
      </text>
      <text
        fontSize={12.5}
        x={567.992}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1471"}
      </text>
      <text
        fontSize={12.5}
        x={626.173}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1458"}
      </text>
      <text
        fontSize={12.5}
        x={684.919}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1460"}
      </text>
      <text
        fontSize={12.5}
        x={742.62}
        y={112.089}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1461"}
      </text>
      <text
        fontSize={12.5}
        x={108.592}
        y={190.477}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1546"}
      </text>
      <text
        fontSize={12.5}
        x={168.146}
        y={190.477}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1552"}
      </text>
      <text
        fontSize={12.5}
        x={224.999}
        y={190.477}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1553"}
      </text>
      <text
        fontSize={12.5}
        x={281.42}
        y={190.477}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1555"}
      </text>
      <text
        fontSize={12.5}
        x={338.206}
        y={190.477}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1557"}
      </text>
      <text
        fontSize={12.5}
        x={396.108}
        y={190.477}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1558"}
      </text>
      <text
        fontSize={12.5}
        x={108.133}
        y={265.851}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1522"}
      </text>
      <text
        fontSize={12.5}
        x={165.934}
        y={265.851}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1583"}
      </text>
      <text
        fontSize={12.5}
        x={222.717}
        y={265.851}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1524"}
      </text>
      <text
        fontSize={12.5}
        x={279.191}
        y={265.851}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1526"}
      </text>
      <text
        fontSize={12.5}
        x={106.623}
        y={574.544}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1464"}
      </text>
      <text
        fontSize={12.5}
        x={168.239}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1473"}
      </text>
      <text
        fontSize={12.5}
        x={225.11}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1474"}
      </text>
      <text
        fontSize={12.5}
        x={281.454}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1493"}
      </text>
      <text
        fontSize={12.5}
        x={338.197}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1475"}
      </text>
      <text
        fontSize={12.5}
        x={396.054}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1483"}
      </text>
      <text
        fontSize={12.5}
        x={451.472}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1505"}
      </text>
      <text
        fontSize={12.5}
        x={509.093}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1506"}
      </text>
      <text
        fontSize={12.5}
        x={568.127}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1476"}
      </text>
      <text
        fontSize={12.5}
        x={626.182}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1490"}
      </text>
      <text
        fontSize={12.5}
        x={684.763}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1492"}
      </text>
      <text
        fontSize={12.5}
        x={742.787}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1484"}
      </text>
      <text
        fontSize={12.5}
        x={797.283}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1485"}
      </text>
      <text
        fontSize={12.5}
        x={852.69}
        y={574.544}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1486"}
      </text>
      <text
        fontSize={12.5}
        x={106.23}
        y={652.669}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1564"}
      </text>
      <text
        fontSize={12.5}
        x={165.929}
        y={652.669}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1567"}
      </text>
      <text
        fontSize={12.5}
        x={222.713}
        y={652.669}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1570"}
      </text>
      <text
        fontSize={12.5}
        x={278.436}
        y={652.669}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1571"}
      </text>
      <text
        fontSize={12.5}
        x={335.949}
        y={652.669}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1574"}
      </text>
      <text
        fontSize={12.5}
        x={393.791}
        y={652.669}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1576"}
      </text>
      <text
        fontSize={12.5}
        x={106.488}
        y={726.928}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
          textAlign: "center",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
      >
        {"mm1597"}
      </text>
      <text
        fontSize={12.5}
        x={168.293}
        y={726.928}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1598"}
      </text>
      <text
        fontSize={12.5}
        x={225.045}
        y={726.928}
        style={{
          textAlign: "center",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontFamily="Helvetica Neue"
        textAnchor="middle"
        fontWeight={400}
      >
        {"mm1599"}
      </text>
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-483.754}
        y={67.147}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Bottom"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 433.409v66.464"
      />
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-247.094}
        y={67.147}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Bottom"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 194.749v66.464"
      />
      <text
        transform="rotate(-90)"
        fontSize={15}
        x={-91.44}
        y={67.147}
        style={{
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        fontWeight={400}
        fontFamily="Helvetica Neue"
      >
        {"Top"}
      </text>
      <path
        strokeMiterlimit={10}
        fill="none"
        stroke="#231f20"
        strokeWidth={0.772}
        d="M75.919 48.899v66.464"
      />
      <text
        style={{
          lineHeight: "125%",
          InkscapeFontSpecification: "'Helvetica Neue'",
        }}
        x={15.824}
        y={28.431}
        fontWeight={400}
        fontSize={16.268}
        fontFamily="Helvetica Neue"
        letterSpacing={0}
        wordSpacing={0}
      >
        <tspan
          x={15.824}
          y={28.431}
          style={{
            InkscapeFontSpecification: "Palatino",
          }}
          fontSize={15}
          fontFamily="Palatino"
        >
          {"The ENCODE Consortium"}
          <tspan fontStyle="italic">{" et al"}</tspan>
          {"., Supplementary Figure 14"}
        </tspan>
      </text>
    </svg>
  );
}

export default SvgSupplementaryFigure14;

