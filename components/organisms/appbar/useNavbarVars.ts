import { Theme, useColorModeValue, useTheme } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import gsap from "gsap";

export const useNavbarVars = () => {

    const theme: Theme = useTheme();

    /**
     * @dev Theme colors
     */
    const colors = useMemo(() => ([
        theme.colors.blue[400],
        theme.colors.yellow[400],
        theme.colors.red[400],
        theme.colors.green[400]
    ]), [theme]);

    /**
     * @dev Takes care of alternating single color
     * @param el: Element to alter colors of
     * @param whatToAnimate: CSS property to animate
     */
    const singleColorFadeAnim = useCallback((el: HTMLDivElement | HTMLParagraphElement | null, whatToAnimate: string) => {
        if (!!el) {
            const timeline = gsap.timeline({
                paused: true,
                repeat: Infinity,
                yoyo: true
            });
            colors.forEach((color) => {
                timeline.to(el, {
                    [whatToAnimate]: color,
                    duration: 5,
                    ease: "none"
                }, ">");
            });
            timeline.play();
        }
    }, [colors]);

    /**
     * @dev For navbar progress gradient
     */
    const progressColorsGradientAnim = useCallback((el: HTMLDivElement | null) => {
        if (!!el) {
            const timeline = gsap.timeline({
                repeat: Infinity
            });

            const commonOptions: gsap.TweenVars = {
                duration: 0.4,
                ease: "none"
            }

            const colorsNum = colors.length;

            const getColorByIndex = (index: number) => (colors[index % colorsNum]);
            const getPrevIndex = (index: number) => ((index + colorsNum - 1) % colorsNum);

            for (let i = colorsNum - 1; i >= 0; i--) {
                const individualColorTimeline = gsap.timeline();
                const fromGradient = `linear-gradient(90deg, ${getColorByIndex(i)}, ${getColorByIndex(i + 1)}, ${getColorByIndex(i + 2)}, ${getColorByIndex(i + 3)}`;
                const toGradient = `linear-gradient(90deg, ${getColorByIndex(getPrevIndex(i))}, ${getColorByIndex(getPrevIndex(i + 1))}, ${getColorByIndex(getPrevIndex(i + 2))}, ${getColorByIndex(getPrevIndex(i + 3))}`;

                individualColorTimeline.fromTo(el, {
                    ...commonOptions,
                    background: fromGradient
                }, {
                    ...commonOptions,
                    background: toGradient
                });

                timeline.add(individualColorTimeline, ">");
            }
        }
    }, [colors]);

    /**
     * @dev Animation for full horizontal movement
     */
    const horizontalFullAnim = useCallback((el: HTMLDivElement | null) => {
        if (!!el) {
            gsap.fromTo(el, {
                transform: "translateX(-100%)"
            }, {
                transform: "translateX(100vw)",
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "power2.inOut"
            });
        }
    }, []);

    /**
     * @dev Navbar background color, set according to color mode
     */
    const navbarBackground = useColorModeValue("gray.50", "gray.800");

    return {
        singleColorFadeAnim,
        navbarBackground,
        colors,
        progressColorsGradientAnim,
        horizontalFullAnim
    }
}