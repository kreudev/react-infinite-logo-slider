import React from "react";
interface SliderProps {
    children: React.ReactElement[];
    width?: string;
    duration?: number;
    toRight?: boolean;
    pauseOnHover?: boolean;
    blurBorders?: boolean;
    blurBorderColor?: string;
}
interface SlideProps {
    children: React.ReactNode;
    width?: string;
}
declare const Slider: React.FC<SliderProps> & {
    Slide: React.FC<SlideProps>;
};
export default Slider;
