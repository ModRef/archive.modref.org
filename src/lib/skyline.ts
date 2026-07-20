// Deterministic 32-bit FNV-1a hash of a string.
export function hash(s: string): number {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

// Placeholder centre "outline" for a postmark: a deterministic skyline silhouette
// derived from the city name. Drawn around the origin, baseline at y=0, buildings
// rising upward; ~86 wide. Swap this for the AI-generated per-city landmark SVGs.
export function skylineOutline(city: string): string {
	const h = hash(city);
	const bars = 5 + (h % 3);
	const w = 86 / bars;
	let p = '';
	const x0 = -43;
	for (let i = 0; i < bars; i++) {
		const hh = 18 + ((h >> (i * 3)) % 28);
		const roof = (h >> (i * 2)) % 3;
		const bx = x0 + i * w;
		const by = -hh;
		p += `M${bx.toFixed(1)},0 L${bx.toFixed(1)},${by.toFixed(1)} `;
		if (roof === 1) p += `L${(bx + w / 2).toFixed(1)},${(by - 10).toFixed(1)} L${(bx + w).toFixed(1)},${by.toFixed(1)} `;
		else if (roof === 2) p += `L${(bx + w * 0.62).toFixed(1)},${by.toFixed(1)} L${(bx + w).toFixed(1)},${(by + 8).toFixed(1)} `;
		else p += `L${(bx + w).toFixed(1)},${by.toFixed(1)} `;
		p += `L${(bx + w).toFixed(1)},0 Z `;
	}
	return `<path d="${p}" fill="currentColor" stroke="none" />`;
}
