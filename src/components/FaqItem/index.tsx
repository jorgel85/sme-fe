// FaqItem.tsx  
import React, { useState } from "react";  
import { Box, Typography, IconButton } from "@mui/material";  
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";  
import { CSSTransition } from "react-transition-group";  
import "./index.css";

interface FaqItemProps {  
  item: FaqData;  
}  

const FaqItem: React.FC<FaqItemProps> = ({ item }) => {  
  const [isExpanded, setIsExpanded] = useState(false);  

  const handleToggle = () => {  
    setIsExpanded((prev) => !prev);  
  };  

  return (  
    <Box sx={{ my: 2 }}>  
      <Box  
        sx={{  
          display: "flex",  
          justifyContent: "space-between",  
          alignItems: "center",  
          gap: 1,  
          backgroundColor: "#F2F1E7",  
          borderRadius: 3,  
          p: 2,  
          cursor: "pointer",  
        }}  
        onClick={handleToggle}  
      >  
        <Typography  
          component="p"  
          sx={{  
            fontSize: "16px",  
            fontWeight: 400,  
            color: "#353535",  
          }}  
        >  
          {item.question}  
        </Typography>  
        <IconButton size="large">  
          <ExpandMoreIcon  
            sx={{  
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",  
              transition: "transform 0.3s ease",  
            }}  
          />  
        </IconButton>  
      </Box>  
      <CSSTransition  
        in={isExpanded}  
        timeout={300}  
        classNames="fade"  
        unmountOnExit  
      >  
        <Box sx={{ p: 2 }}>  
          <Typography  
            component="p"  
            sx={{  
              fontSize: "16px",  
              fontWeight: 400,  
              color: "#353535",  
            }}  
          >  
            {item.answer}  
          </Typography>  
        </Box>  
      </CSSTransition>  
    </Box>  
  );  
};  

export default FaqItem;
