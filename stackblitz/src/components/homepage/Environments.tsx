import { technologies } from "@/utils/technologies";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Environments() {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!isMounted) return null;

  return (
    <div className="section py-20">
      <h2 className="text-center mb-10 text-3xl font-redHatDisplay">
        Boot a fresh environment in <strong>milliseconds.</strong>
      </h2>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          variant="scrollable"
          sx={{
            ".Mui-selected": {
              color: `white`,
              opacity: "100%",
            },
          }}
          TabIndicatorProps={{
            style: { backgroundColor: "#33ffcc" },
          }}
        >
          {technologies.map((tech, index) => (
            <Tab
              sx={{
                textTransform: "none",
                color: "white",
                opacity: "60%",
              }}
              key={tech.title}
              label={tech.title}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
          {technologies.map((tech, index) => (
            <CustomTabPanel key={tech.title} value={value} index={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {tech.techs.map((t) => (
                  <div
                    key={`${t.title}-${t.subTitle}`}
                    className="flex flex-row bg-[#272a3099] p-3 items-center justify-start space-x-5"
                  >
                    <Image src={t.image} alt={t.title} width={48} />
                    <span className="flex flex-col text-[#cccccc]">
                      <span>{t.title}</span>
                      <span className="opacity-70">{t.subTitle}</span>
                    </span>
                  </div>
                ))}
              </div>
            </CustomTabPanel>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default Environments;
