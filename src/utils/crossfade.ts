import { crossfade as svelteCrossfade } from "svelte/transition";
import { quintOut,backOut } from "svelte/easing";

export const crossfade = svelteCrossfade({ duration: 1000, easing: quintOut });
