import React, {useState, useEffect, useContext} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import config from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader} from "../config/helperFunc";
import {EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from '../config/appMotions';
import CustomSuggestion from "../components/CustomSuggestion";
import Options from "../components/Options";

const Customiser = () => {
  return (
    <div>Customiser</div>
  )
}

export default Customiser