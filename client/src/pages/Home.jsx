import React, {useContext} from 'react';
import {motion, AnimatePresence } from "framer-motion";
import UserContext from '../store/UserContext';
import CustomButton from '../components/CustomButton';
import { useNavigate } from "react-router-dom";

import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/appMotions'


const Home = () => {

    const StoreValues = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                        src='./logo-bird.jpeg'
                        alt='logo'
                        className='w-20 h-20 object-contain'
                        />    
                </motion.header>
                <motion.div className='home-content xl:mb-0' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text' >
                            Let's Do It.
                        </h1>
                    </motion.div>
                </motion.div>
                <motion.div>
                    <p className='head-sub-text'>
                        Customise your products with our amazing 3D tool which let's you to choose from a range of options.
                    </p>
                    <p className='head-highlight'>Unleash your imagination</p>
                    <CustomButton 
                        type="filled"
                        title="Try it"
                        handleClick={()=>{
                            navigate("/Customiser");
                        }}
                        color={StoreValues.color}
                        customStyles="w-fit px-4 py-2.5 font-bold text-sm mt-5"
                    />
                </motion.div>
            </motion.section>
        </AnimatePresence>
    )
}

export default Home