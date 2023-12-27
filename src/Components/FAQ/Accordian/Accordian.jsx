import * as React from 'react';
import {Accordion} from '@mui/material';
import {AccordionSummary} from '@mui/material';
import {AccordionDetails} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {Typography} from '@mui/material';

export default function Accordian(){
    return(<>

<div>
      <Accordion style={{backgroundColor:"var(--color-lightblack)",  borderTop: '1px solid gray', borderRadius:"0px" }}>
            <AccordionSummary
            
            expandIcon={
                <div style={{backgroundColor:"var(--color-primary)", width:"28px", height:"28px", borderRadius:"50%"}}>
                    <AddIcon style={{color:"var(--color-black)", position:'relative', left:"50%", top:"50%", transform:"translateY(-50%) translateX(-50%)"}}/>
                </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography style={{padding:"39px 0px", fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px", color:"var(--color-white)"}}>How much is my case worth?</Typography>
            </AccordionSummary>

            <AccordionDetails>
            <Typography style={{color: "var(--color-white)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor:"var(--color-lightblack)",  borderTop: '1px solid gray', borderRadius:"0px"}}>
            <AccordionSummary
             expandIcon={
                <div style={{backgroundColor:"var(--color-primary)", width:"28px", height:"28px", borderRadius:"50%"}}>
                    <AddIcon style={{color:"var(--color-black)", position:'relative', left:"50%", top:"50%", transform:"translateY(-50%) translateX(-50%)"}}/>
                </div>
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{padding:"39px 0px",fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px", color:"var(--color-white)"}}>What should I do right after car accident</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{color: "var(--color-white)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion style={{backgroundColor:"var(--color-lightblack)" , borderTop: '1px solid gray', borderRadius:"0px"}}>
            <AccordionSummary
             expandIcon={
                <div style={{backgroundColor:"var(--color-primary)", width:"28px", height:"28px", borderRadius:"50%"}}>
                    <AddIcon style={{color:"var(--color-black)", position:'relative', left:"50%", top:"50%", transform:"translateY(-50%) translateX(-50%)"}}/>
                </div>
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{padding:"39px 0px",fontFamily:"Inter", fontWeight:"600", fontSize:"24px", lineHeight:"24px", color:"var(--color-white)"}} > How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography style={{color: "var(--color-white)"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>

        
    </div>


    </>)
}