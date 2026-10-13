interface AbMatProps {
  className?: string;
  variant?: "men" | "women" | "neutral";
}

/**
 * Original abstract Kabaddi mat-inspired visual treatment.
 * Uses layered gradients + CSS shapes to evoke a Kabaddi court without
 * copyrighted imagery. Designed to be replaced later with real photography.
 */
export function AbMat({ className = "", variant = "neutral" }: AbMatProps) {
  const accent = variant === "men" ? "#2563FF" : variant === "women" ? "#E63946" : "#C8A45D";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* base */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-2 to-midnight" />
      {/* court lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[70%] h-[70%] rounded-full border border-white/10">
          <div className="absolute inset-[15%] rounded-full border border-white/8" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full border border-white/12" />
          {/* center line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
          {/* mid lines */}
          <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-white/5" />
        </div>
      </div>
      {/* light wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: `radial-gradient(circle at 50% 50%, ${accent}22, transparent 60%)` }}
      />
      {/* grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

interface AbArenaProps {
  className?: string;
}

export function AbArena({ className = "" }: AbArenaProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#17243d] via-[#101b30] to-[#080c18]" />
      {/* arena silhouette - concentric arcs suggesting stadium bowl */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] aspect-[2/1]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-t-full border-t"
            style={{
              borderColor: i === 0 ? "rgba(200,164,93,0.25)" : "rgba(255,255,255,0.05)",
              transform: `scale(${1 - i * 0.12}) translateY(${i * 8}px)`,
            }}
          />
        ))}
      </div>
      {/* spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] opacity-40"
        style={{ background: "radial-gradient(ellipse at top, rgba(37,99,255,0.25), transparent 70%)" }} />
      {/* floor glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{ background: "linear-gradient(to top, rgba(200,164,93,0.1), transparent)" }} />
    </div>
  );
}

interface AbAthleteProps {
  className?: string;
  variant?: "men" | "women";
  seed?: number;
}

// Each pose is a set of anatomical SVG path strings drawn in a 200x360 viewBox.
// Figures are faceless, wearing fitted sports jerseys + shorts.
// pt = body paths, cloth = clothing shapes, rim = rim-light highlight paths,
// shadow = ground shadow ellipse params, streakAngle = motion streak angle.

interface AthletePose {
  body: string[];
  cloth: string[];
  rim: string[];
  shadow: { cx: number; cy: number; rx: number; ry: number };
  streakAngle: number;
}

const POSES: AthletePose[] = [
  // 01 — Lucas Moreau: aggressive raider reaching forward
  {
    body: [
      // Head (slightly tilted forward)
      "M112,42 a13,14 0 1,0 0.1,0 Z",
      // Neck
      "M108,56 L112,56 L113,64 L107,64 Z",
      // Torso — broad shoulders tapering to waist, leaning forward
      "M88,68 Q86,72 85,78 L83,108 Q82,118 85,122 L93,124 L113,122 Q118,118 117,108 L115,78 Q114,72 112,68 Q100,64 88,68 Z",
      // Right arm — extended forward reaching (upper + forearm)
      "M115,72 Q126,72 138,76 Q146,80 150,84 Q152,88 148,90 Q142,87 134,84 Q126,81 118,78 Z",
      "M148,84 Q156,86 164,88 Q170,91 172,95 Q171,98 166,97 Q158,94 150,90 Z",
      // Left arm — back, bent (upper + forearm)
      "M85,72 Q76,72 68,76 Q62,80 60,84 Q59,88 63,89 Q70,86 78,82 Q83,79 86,76 Z",
      "M62,84 Q56,88 54,94 Q53,98 57,99 Q62,96 65,91 Z",
      // Right leg — lunge forward (thigh + shin)
      "M93,124 Q102,130 108,142 Q112,155 110,168 L106,170 L100,166 Q96,152 92,138 Z",
      "M106,168 Q110,180 112,195 Q113,210 111,225 L106,227 L102,222 Q101,205 102,188 Z",
      // Left leg — trailing back (thigh + shin)
      "M85,124 Q78,132 72,145 Q68,158 70,172 L75,174 L80,170 Q84,156 87,142 Z",
      "M72,172 Q66,184 62,198 Q60,212 63,226 L68,228 L72,223 Q74,206 75,188 Z",
      // Feet
      "M102,225 Q100,232 104,234 L112,233 Q114,230 112,225 Z",
      "M68,226 Q66,232 70,234 L78,233 Q80,230 77,225 Z",
    ],
    cloth: [
      // Jersey — covers torso, sleeve caps
      "M88,68 Q86,72 85,78 L83,108 Q82,118 85,122 L93,124 L113,122 Q118,118 117,108 L115,78 Q114,72 112,68 Q100,64 88,68 Z",
      "M115,72 Q122,73 128,75 Q126,78 120,77 Q116,76 114,74 Z",
      "M85,72 Q78,73 72,75 Q74,78 80,77 Q84,76 86,74 Z",
      // Shorts
      "M83,122 L117,122 L116,140 Q113,142 106,142 Q100,140 93,140 Q86,140 84,138 Z",
      // Jersey number accent stripe
      "M86,88 L116,88 L116,92 L86,92 Z",
    ],
    rim: [
      "M112,42 a13,14 0 1,0 0.1,0 Z",
      "M88,68 Q86,72 85,78 L83,108 Q82,118 85,122 L93,124 L113,122 Q118,118 117,108 L115,78 Q114,72 112,68 Q100,64 88,68 Z",
      "M115,72 Q126,72 138,76 Q146,80 150,84 Q152,88 148,90 Q142,87 134,84 Q126,81 118,78 Z",
      "M148,84 Q156,86 164,88 Q170,91 172,95 Q171,98 166,97 Q158,94 150,90 Z",
      "M93,124 Q102,130 108,142 Q112,155 110,168 L106,170 L100,166 Q96,152 92,138 Z",
      "M106,168 Q110,180 112,195 Q113,210 111,225 L106,227 L102,222 Q101,205 102,188 Z",
      "M85,124 Q78,132 72,145 Q68,158 70,172 L75,174 L80,170 Q84,156 87,142 Z",
      "M72,172 Q66,184 62,198 Q60,212 63,226 L68,228 L72,223 Q74,206 75,188 Z",
    ],
    shadow: { cx: 90, cy: 240, rx: 52, ry: 7 },
    streakAngle: -22,
  },
  // 02 — Anna Schmidt: defensive stance, low and ready
  {
    body: [
      // Head
      "M100,50 a12,13 0 1,0 0.1,0 Z",
      // Neck
      "M96,63 L104,63 L105,70 L95,70 Z",
      // Torso — compact, leaning slightly forward, athletic female proportions
      "M86,70 Q84,74 84,80 L82,108 Q82,116 86,120 L96,122 L104,122 Q108,116 108,108 L106,80 Q106,74 104,70 Q95,66 86,70 Z",
      // Right arm — extended to side, ready (upper + forearm)
      "M106,74 Q116,74 126,78 Q132,82 134,86 Q133,90 128,89 Q120,85 112,81 Q108,79 106,77 Z",
      "M128,86 Q134,88 138,91 Q140,95 137,97 Q133,95 129,92 Z",
      // Left arm — bent up, defensive (upper + forearm)
      "M84,74 Q76,75 70,80 Q66,84 68,88 Q72,89 78,85 Q82,82 84,79 Z",
      "M70,80 Q66,86 64,93 Q63,97 67,98 Q71,95 73,89 Z",
      // Right leg — wide stance, bent (thigh + shin)
      "M97,122 Q106,128 112,140 Q116,153 114,166 L109,168 L104,164 Q100,150 96,136 Z",
      "M109,166 Q113,178 114,193 Q114,208 111,222 L106,224 L102,219 Q102,202 104,185 Z",
      // Left leg — wide, bent lower (thigh + shin)
      "M89,122 Q82,130 76,143 Q72,156 74,170 L79,172 L84,168 Q88,154 91,140 Z",
      "M79,170 Q73,182 70,196 Q69,210 72,224 L77,226 L81,221 Q82,204 82,187 Z",
      // Feet
      "M102,222 Q100,228 104,230 L112,229 Q114,226 111,222 Z",
      "M74,224 Q72,228 76,230 L84,229 Q86,226 83,224 Z",
    ],
    cloth: [
      // Jersey
      "M86,70 Q84,74 84,80 L82,108 Q82,116 86,120 L96,122 L104,122 Q108,116 108,108 L106,80 Q106,74 104,70 Q95,66 86,70 Z",
      "M106,74 Q114,75 120,77 Q118,80 112,79 Q108,78 106,76 Z",
      "M84,74 Q78,75 73,77 Q75,80 80,79 Q83,78 85,76 Z",
      // Shorts
      "M84,120 L106,120 L105,138 Q102,140 96,140 Q90,140 85,138 Z",
      // Jersey accent line
      "M86,88 L106,88 L106,92 L86,92 Z",
    ],
    rim: [
      "M100,50 a12,13 0 1,0 0.1,0 Z",
      "M86,70 Q84,74 84,80 L82,108 Q82,116 86,120 L96,122 L104,122 Q108,116 108,108 L106,80 Q106,74 104,70 Q95,66 86,70 Z",
      "M106,74 Q116,74 126,78 Q132,82 134,86 Q133,90 128,89 Q120,85 112,81 Q108,79 106,77 Z",
      "M128,86 Q134,88 138,91 Q140,95 137,97 Q133,95 129,92 Z",
      "M84,74 Q76,75 70,80 Q66,84 68,88 Q72,89 78,85 Q82,82 84,79 Z",
      "M70,80 Q66,86 64,93 Q63,97 67,98 Q71,95 73,89 Z",
      "M97,122 Q106,128 112,140 Q116,153 114,166 L109,168 L104,164 Q100,150 96,136 Z",
      "M109,166 Q113,178 114,193 Q114,208 111,222 L106,224 L102,219 Q102,202 104,185 Z",
      "M89,122 Q82,130 76,143 Q72,156 74,170 L79,172 L84,168 Q88,154 91,140 Z",
      "M79,170 Q73,182 70,196 Q69,210 72,224 L77,226 L81,221 Q82,204 82,187 Z",
    ],
    shadow: { cx: 92, cy: 238, rx: 50, ry: 7 },
    streakAngle: 0,
  },
  // 03 — Kamil Nowak: agile all-rounder, dynamic sideways movement
  {
    body: [
      // Head — turned sideways
      "M96,48 a13,14 0 1,0 0.1,0 Z",
      // Neck
      "M92,62 L98,62 L100,70 L90,70 Z",
      // Torso — twisted, leaning right
      "M82,68 Q80,72 80,78 L78,106 Q78,114 82,118 L92,121 L104,119 Q110,114 108,106 L106,78 Q105,72 102,68 Q92,64 82,68 Z",
      // Right arm — swinging forward (upper + forearm)
      "M104,72 Q112,74 120,80 Q124,84 122,88 Q116,87 110,83 Q106,80 104,78 Z",
      "M120,80 Q126,84 130,90 Q131,94 127,95 Q122,93 118,88 Z",
      // Left arm — extended back (upper + forearm)
      "M82,72 Q74,74 66,78 Q62,82 64,86 Q70,87 76,83 Q80,80 82,78 Z",
      "M64,78 Q56,82 50,88 Q48,92 52,93 Q58,91 62,86 Z",
      // Right leg — stepping right (thigh + shin)
      "M96,121 Q104,127 110,140 Q113,153 110,166 L105,168 L100,164 Q97,150 93,136 Z",
      "M105,166 Q109,178 108,193 Q107,208 104,222 L99,224 L96,219 Q98,202 101,185 Z",
      // Left leg — crossed behind (thigh + shin)
      "M88,121 Q80,129 74,142 Q71,155 74,168 L79,170 L84,166 Q87,152 90,138 Z",
      "M74,168 Q68,180 66,194 Q65,208 68,222 L73,224 L77,219 Q79,202 79,185 Z",
      // Feet
      "M96,222 Q94,228 98,230 L106,229 Q108,226 105,222 Z",
      "M70,224 Q68,228 72,230 L80,229 Q82,226 79,224 Z",
    ],
    cloth: [
      // Jersey
      "M82,68 Q80,72 80,78 L78,106 Q78,114 82,118 L92,121 L104,119 Q110,114 108,106 L106,78 Q105,72 102,68 Q92,64 82,68 Z",
      "M104,72 Q110,74 114,76 Q112,79 108,78 Q105,77 104,75 Z",
      "M82,72 Q76,74 72,76 Q74,79 78,78 Q81,77 82,75 Z",
      // Shorts
      "M80,119 L106,119 L105,137 Q102,139 95,139 Q88,139 81,137 Z",
      "M84,88 L106,88 L106,91 L84,91 Z",
    ],
    rim: [
      "M96,48 a13,14 0 1,0 0.1,0 Z",
      "M82,68 Q80,72 80,78 L78,106 Q78,114 82,118 L92,121 L104,119 Q110,114 108,106 L106,78 Q105,72 102,68 Q92,64 82,68 Z",
      "M104,72 Q112,74 120,80 Q124,84 122,88 Q116,87 110,83 Q106,80 104,78 Z",
      "M120,80 Q126,84 130,90 Q131,94 127,95 Q122,93 118,88 Z",
      "M82,72 Q74,74 66,78 Q62,82 64,86 Q70,87 76,83 Q80,80 82,78 Z",
      "M64,78 Q56,82 50,88 Q48,92 52,93 Q58,91 62,86 Z",
      "M96,121 Q104,127 110,140 Q113,153 110,166 L105,168 L100,164 Q97,150 93,136 Z",
      "M105,166 Q109,178 108,193 Q107,208 104,222 L99,224 L96,219 Q98,202 101,185 Z",
      "M88,121 Q80,129 74,142 Q71,155 74,168 L79,170 L84,166 Q87,152 90,138 Z",
      "M74,168 Q68,180 66,194 Q65,208 68,222 L73,224 L77,219 Q79,202 79,185 Z",
    ],
    shadow: { cx: 86, cy: 238, rx: 48, ry: 6 },
    streakAngle: -12,
  },
  // 04 — Sofia Rossi: female raider, quick attacking movement
  {
    body: [
      // Head
      "M108,52 a12,13 0 1,0 0.1,0 Z",
      // Neck
      "M104,65 L112,65 L113,72 L103,72 Z",
      // Torso — female proportions, leaning into attack
      "M90,70 Q88,74 88,80 L86,106 Q86,114 90,118 L100,120 L110,118 Q114,114 114,106 L112,80 Q112,74 110,70 Q100,66 90,70 Z",
      // Right arm — thrust forward aggressively (upper + forearm)
      "M112,74 Q122,74 134,77 Q142,80 146,84 Q147,88 143,89 Q135,86 127,83 Q119,80 113,77 Z",
      "M143,84 Q151,85 158,87 Q164,90 164,94 Q162,97 157,96 Q150,93 144,89 Z",
      // Left arm — back for balance (upper + forearm)
      "M88,74 Q80,75 73,78 Q69,82 71,86 Q76,87 82,84 Q86,81 88,78 Z",
      "M71,78 Q64,82 60,87 Q59,91 63,92 Q68,90 71,85 Z",
      // Right leg — forward lunge (thigh + shin)
      "M98,120 Q107,126 113,138 Q117,151 115,164 L110,166 L105,162 Q101,148 95,134 Z",
      "M110,164 Q114,176 115,191 Q115,206 112,220 L107,222 L103,217 Q104,200 106,183 Z",
      // Left leg — driving back (thigh + shin)
      "M92,120 Q85,128 79,141 Q76,154 79,167 L84,169 L89,165 Q92,151 95,137 Z",
      "M84,167 Q78,179 75,193 Q74,207 77,221 L82,223 L86,218 Q87,201 86,184 Z",
      // Feet
      "M103,220 Q101,226 105,228 L113,227 Q115,224 112,220 Z",
      "M79,222 Q77,226 81,228 L89,227 Q91,224 88,222 Z",
    ],
    cloth: [
      // Jersey
      "M90,70 Q88,74 88,80 L86,106 Q86,114 90,118 L100,120 L110,118 Q114,114 114,106 L112,80 Q112,74 110,70 Q100,66 90,70 Z",
      "M112,74 Q118,75 124,77 Q122,80 116,79 Q113,78 112,76 Z",
      "M88,74 Q82,75 77,77 Q79,80 84,79 Q87,78 88,76 Z",
      // Shorts
      "M88,118 L110,118 L109,136 Q106,138 100,138 Q94,138 89,136 Z",
      "M90,88 L110,88 L110,91 L90,91 Z",
    ],
    rim: [
      "M108,52 a12,13 0 1,0 0.1,0 Z",
      "M90,70 Q88,74 88,80 L86,106 Q86,114 90,118 L100,120 L110,118 Q114,114 114,106 L112,80 Q112,74 110,70 Q100,66 90,70 Z",
      "M112,74 Q122,74 134,77 Q142,80 146,84 Q147,88 143,89 Q135,86 127,83 Q119,80 113,77 Z",
      "M143,84 Q151,85 158,87 Q164,90 164,94 Q162,97 157,96 Q150,93 144,89 Z",
      "M88,74 Q80,75 73,78 Q69,82 71,86 Q76,87 82,84 Q86,81 88,78 Z",
      "M71,78 Q64,82 60,87 Q59,91 63,92 Q68,90 71,85 Z",
      "M98,120 Q107,126 113,138 Q117,151 115,164 L110,166 L105,162 Q101,148 95,134 Z",
      "M110,164 Q114,176 115,191 Q115,206 112,220 L107,222 L103,217 Q104,200 106,183 Z",
      "M92,120 Q85,128 79,141 Q76,154 79,167 L84,169 L89,165 Q92,151 95,137 Z",
      "M84,167 Q78,179 75,193 Q74,207 77,221 L82,223 L86,218 Q87,201 86,184 Z",
    ],
    shadow: { cx: 96, cy: 236, rx: 50, ry: 7 },
    streakAngle: -25,
  },
  // 05 — James Carter: strong defensive stance, preparing for tackle
  {
    body: [
      // Head
      "M100,56 a14,15 0 1,0 0.1,0 Z",
      // Neck — thick
      "M95,70 L105,70 L106,78 L94,78 Z",
      // Torso — broad, powerful, squared shoulders
      "M80,74 Q77,78 77,85 L75,110 Q75,118 80,122 L92,125 L108,125 Q113,118 113,110 L111,85 Q111,78 108,74 Q94,70 80,74 Z",
      // Right arm — bent, coiled (upper + forearm)
      "M110,78 Q120,78 128,84 Q132,90 128,94 Q120,92 114,87 Q111,84 110,81 Z",
      "M128,84 Q134,90 134,97 Q132,101 127,100 Q124,96 122,90 Z",
      // Left arm — bent, coiled (upper + forearm)
      "M80,78 Q70,78 62,84 Q58,90 62,94 Q70,92 76,87 Q79,84 80,81 Z",
      "M62,84 Q56,90 56,97 Q58,101 63,100 Q66,96 68,90 Z",
      // Right leg — planted wide (thigh + shin)
      "M98,125 Q108,131 114,144 Q118,158 116,172 L110,174 L105,170 Q101,155 95,140 Z",
      "M110,172 Q114,184 115,199 Q115,214 112,228 L106,230 L102,225 Q103,208 105,190 Z",
      // Left leg — planted wide (thigh + shin)
      "M92,125 Q82,131 76,144 Q72,158 74,172 L80,174 L85,170 Q89,155 95,140 Z",
      "M80,172 Q76,184 75,199 Q75,214 78,228 L84,230 L88,225 Q87,208 85,190 Z",
      // Feet
      "M102,228 Q100,234 105,236 L113,235 Q115,232 112,228 Z",
      "M78,228 Q76,234 81,236 L89,235 Q91,232 88,228 Z",
    ],
    cloth: [
      // Jersey — broad
      "M80,74 Q77,78 77,85 L75,110 Q75,118 80,122 L92,125 L108,125 Q113,118 113,110 L111,85 Q111,78 108,74 Q94,70 80,74 Z",
      "M110,78 Q118,79 122,81 Q120,84 114,83 Q111,82 110,80 Z",
      "M80,78 Q72,79 68,81 Q70,84 76,83 Q79,82 80,80 Z",
      // Shorts
      "M78,122 L112,122 L111,141 Q107,143 100,143 Q92,143 79,141 Z",
      "M80,90 L110,90 L110,93 L80,93 Z",
    ],
    rim: [
      "M100,56 a14,15 0 1,0 0.1,0 Z",
      "M80,74 Q77,78 77,85 L75,110 Q75,118 80,122 L92,125 L108,125 Q113,118 113,110 L111,85 Q111,78 108,74 Q94,70 80,74 Z",
      "M110,78 Q120,78 128,84 Q132,90 128,94 Q120,92 114,87 Q111,84 110,81 Z",
      "M128,84 Q134,90 134,97 Q132,101 127,100 Q124,96 122,90 Z",
      "M80,78 Q70,78 62,84 Q58,90 62,94 Q70,92 76,87 Q79,84 80,81 Z",
      "M62,84 Q56,90 56,97 Q58,101 63,100 Q66,96 68,90 Z",
      "M98,125 Q108,131 114,144 Q118,158 116,172 L110,174 L105,170 Q101,155 95,140 Z",
      "M110,172 Q114,184 115,199 Q115,214 112,228 L106,230 L102,225 Q103,208 105,190 Z",
      "M92,125 Q82,131 76,144 Q72,158 74,172 L80,174 L85,170 Q89,155 95,140 Z",
      "M80,172 Q76,184 75,199 Q75,214 78,228 L84,230 L88,225 Q87,208 85,190 Z",
    ],
    shadow: { cx: 95, cy: 242, rx: 55, ry: 8 },
    streakAngle: 0,
  },
  // 06 — Lotte Visser: balanced all-rounder athletic stance
  {
    body: [
      // Head
      "M100,50 a12,13 0 1,0 0.1,0 Z",
      // Neck
      "M96,63 L104,63 L105,70 L95,70 Z",
      // Torso — balanced, athletic female
      "M86,70 Q84,74 84,80 L82,108 Q82,116 86,120 L96,122 L104,122 Q108,116 108,108 L106,80 Q106,74 104,70 Q95,66 86,70 Z",
      // Right arm — relaxed, slightly forward (upper + forearm)
      "M106,74 Q114,76 120,82 Q123,87 120,90 Q114,88 110,84 Q107,81 106,78 Z",
      "M120,82 Q125,88 126,94 Q124,98 120,98 Q117,94 116,88 Z",
      // Left arm — relaxed, slightly back (upper + forearm)
      "M84,74 Q76,76 70,82 Q67,87 70,90 Q76,88 80,84 Q83,81 84,78 Z",
      "M70,82 Q65,88 64,94 Q66,98 70,98 Q73,94 74,88 Z",
      // Right leg — balanced stance (thigh + shin)
      "M97,122 Q104,128 108,142 Q111,156 108,170 L103,172 L99,168 Q97,153 95,138 Z",
      "M103,170 Q107,182 107,197 Q106,212 103,226 L98,228 L95,223 Q97,206 99,188 Z",
      // Left leg — balanced stance (thigh + shin)
      "M89,122 Q82,128 78,142 Q75,156 78,170 L83,172 L87,168 Q89,153 91,138 Z",
      "M83,170 Q79,182 79,197 Q80,212 83,226 L88,228 L91,223 Q89,206 87,188 Z",
      // Feet
      "M95,226 Q93,232 98,234 L106,233 Q108,230 105,226 Z",
      "M85,226 Q83,232 88,234 L96,233 Q98,230 95,226 Z",
    ],
    cloth: [
      // Jersey
      "M86,70 Q84,74 84,80 L82,108 Q82,116 86,120 L96,122 L104,122 Q108,116 108,108 L106,80 Q106,74 104,70 Q95,66 86,70 Z",
      "M106,74 Q112,76 116,78 Q114,81 109,80 Q106,79 106,77 Z",
      "M84,74 Q78,76 74,78 Q76,81 81,80 Q83,79 84,77 Z",
      // Shorts
      "M84,120 L106,120 L105,138 Q102,140 95,140 Q88,140 85,138 Z",
      "M86,88 L106,88 L106,91 L86,91 Z",
    ],
    rim: [
      "M100,50 a12,13 0 1,0 0.1,0 Z",
      "M86,70 Q84,74 84,80 L82,108 Q82,116 86,120 L96,122 L104,122 Q108,116 108,108 L106,80 Q106,74 104,70 Q95,66 86,70 Z",
      "M106,74 Q114,76 120,82 Q123,87 120,90 Q114,88 110,84 Q107,81 106,78 Z",
      "M120,82 Q125,88 126,94 Q124,98 120,98 Q117,94 116,88 Z",
      "M84,74 Q76,76 70,82 Q67,87 70,90 Q76,88 80,84 Q83,81 84,78 Z",
      "M70,82 Q65,88 64,94 Q66,98 70,98 Q73,94 74,88 Z",
      "M97,122 Q104,128 108,142 Q111,156 108,170 L103,172 L99,168 Q97,153 95,138 Z",
      "M103,170 Q107,182 107,197 Q106,212 103,226 L98,228 L95,223 Q97,206 99,188 Z",
      "M89,122 Q82,128 78,142 Q75,156 78,170 L83,172 L87,168 Q89,153 91,138 Z",
      "M83,170 Q79,182 79,197 Q80,212 83,226 L88,228 L91,223 Q89,206 87,188 Z",
    ],
    shadow: { cx: 91, cy: 240, rx: 48, ry: 7 },
    streakAngle: 0,
  },
];

export function AbAthlete({ className = "", variant = "men", seed = 0 }: AbAthleteProps) {
  const accent = variant === "men" ? "#2563FF" : "#E63946";
  const gold = "#C8A45D";
  const pose = POSES[seed % POSES.length];
  const uid = `ath-${seed}-${variant}`;

  const particles = Array.from({ length: 18 }, (_, i) => {
    const a = ((i * 137.5 + seed * 30) * Math.PI) / 180;
    const d = 30 + ((i * 17 + seed * 11) % 70);
    return {
      x: 100 + Math.cos(a) * d,
      y: 55 + Math.sin(a) * d * 1.5,
      r: 0.6 + (i % 4) * 0.5,
      o: 0.06 + (i % 5) * 0.03,
      gold: i % 4 === 0,
    };
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-2 to-midnight" />
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: `radial-gradient(ellipse 75% 55% at 50% 15%, ${accent}1a, transparent 65%)` }}
      />

      <svg viewBox="0 0 200 360" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id={`${uid}-skin`} x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0%" stopColor="#1a2838" />
            <stop offset="35%" stopColor="#0d1623" />
            <stop offset="100%" stopColor="#050a12" />
          </linearGradient>
          <linearGradient id={`${uid}-jersey`} x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#13203a" />
            <stop offset="50%" stopColor="#0b1526" />
            <stop offset="100%" stopColor="#070e1a" />
          </linearGradient>
          <linearGradient id={`${uid}-jerseyW`} x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#2a1218" />
            <stop offset="50%" stopColor="#1a0b10" />
            <stop offset="100%" stopColor="#0d0608" />
          </linearGradient>
          <linearGradient id={`${uid}-shorts`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1020" />
            <stop offset="100%" stopColor="#040810" />
          </linearGradient>
          <radialGradient id={`${uid}-spot`} cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${uid}-floor`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.14" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id={`${uid}-softblur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* Spotlight wash */}
        <rect width="200" height="360" fill={`url(#${uid}-spot)`} />

        {/* Floor glow under athlete */}
        <ellipse cx={pose.shadow.cx} cy={pose.shadow.cy} rx={pose.shadow.rx + 8} ry={pose.shadow.ry + 4} fill={`url(#${uid}-floor)`} />

        {/* Ground shadow — realistic, offset and blurred */}
        <ellipse
          cx={pose.shadow.cx + 4}
          cy={pose.shadow.cy}
          rx={pose.shadow.rx}
          ry={pose.shadow.ry}
          fill="#000"
          opacity="0.6"
          filter={`url(#${uid}-blur)`}
        />

        {/* Atmospheric particles */}
        {particles.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={p.gold ? gold : accent} opacity={p.o} />
        ))}

        {/* Rim-light glow behind figure (blurred accent halo) */}
        <g filter={`url(#${uid}-blur)`} opacity="0.4">
          {pose.rim.map((d, i) => (
            <path key={i} d={d} fill={accent} />
          ))}
        </g>

        {/* Skin/body base layer */}
        <g fill={`url(#${uid}-skin)`} stroke={`url(#${uid}-skin)`} strokeWidth="0.5" strokeLinejoin="round">
          {pose.body.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Clothing layer — jersey + shorts over torso */}
        <g strokeLinejoin="round">
          {pose.cloth.map((d, i) => {
            const isShorts = d.includes("138") || d.includes("140") || d.includes("139") || d.includes("136");
            const isStripe = d.includes("88") && d.includes("92");
            const jerseyFill = variant === "women" ? `url(#${uid}-jerseyW)` : `url(#${uid}-jersey)`;
            if (isStripe) {
              return <path key={i} d={d} fill={accent} opacity="0.25" />;
            }
            return (
              <path
                key={i}
                d={d}
                fill={isShorts ? `url(#${uid}-shorts)` : jerseyFill}
                stroke={isShorts ? "#030610" : "none"}
                strokeWidth="0.3"
              />
            );
          })}
        </g>

        {/* Anatomical contour lines — subtle muscle definition on limbs */}
        <g fill="none" stroke="#000" strokeWidth="0.4" opacity="0.25">
          {pose.body.slice(2).map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Rim-light edge highlight — accent glow on figure edges */}
        <g fill="none" stroke={accent} strokeWidth="0.7" opacity="0.4" filter={`url(#${uid}-softblur)`}>
          {pose.rim.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Gold key-line accent — subtle premium edge on torso/jersey */}
        <g fill="none" stroke={gold} strokeWidth="0.35" opacity="0.15">
          {pose.cloth.slice(0, 1).map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>

      {/* Motion streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              top: `${25 + i * 18}%`,
              left: "-15%",
              right: "-15%",
              background: `linear-gradient(90deg, transparent, ${accent}${i % 2 ? "28" : "14"}, transparent 55%, ${gold}08, transparent)`,
              transform: `rotate(${pose.streakAngle + i * 3}deg)`,
              opacity: 0.45,
            }}
          />
        ))}
      </div>

      {/* number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-bold text-[120px] leading-none text-white/[0.04] select-none">
          {String(seed + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 85% at center, transparent 30%, rgba(5,10,18,0.7) 100%)" }}
      />

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

interface AbNewsProps {
  className?: string;
  seed?: number;
}

export function AbNews({ className = "", seed = 0 }: AbNewsProps) {
  const tones = ["#2563FF", "#E63946", "#C8A45D"];
  const t = tones[seed % 3];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-2 to-midnight" />
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: `radial-gradient(circle at ${30 + seed * 20}% 40%, ${t}30, transparent 65%)` }}
      />
      {/* editorial lines */}
      <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-6">
        {[0.95, 0.7, 0.5, 0.3].map((w, i) => (
          <div key={i} className="h-1.5 bg-white/5" style={{ width: `${w * 100}%` }} />
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

interface AbVideoProps {
  className?: string;
  seed?: number;
}

export function AbVideo({ className = "", seed = 0 }: AbVideoProps) {
  const tones = ["#2563FF", "#E63946", "#C8A45D"];
  const t = tones[seed % 3];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-2 to-midnight" />
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(ellipse at center, ${t}30, transparent 65%)` }}
      />
      {/* play indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
          <div className="w-0 h-0 border-l-[14px] border-l-white/80 border-y-[9px] border-y-transparent ml-1" />
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
