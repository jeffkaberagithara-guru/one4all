import type { ReactNode } from 'react'

export type Scene = (uid: string) => ReactNode

export const Facade: Scene = () => (
  <>
    <rect width="800" height="600" fill="#E7E7E3" />
    <rect x="280" y="36" width="520" height="564" fill="#2E2E2A" />
    <rect x="280" y="36" width="12" height="564" fill="#111111" opacity="0.3" />
    <rect x="0" y="120" width="280" height="480" fill="#D8D8D3" />
    <rect x="-40" y="176" width="180" height="92" fill="#C9C9C4" />
    <rect x="-40" y="262" width="180" height="10" fill="#B4B4AE" />
    {Array.from({ length: 9 }, (_, i) => (
      <line key={`v${i}`} x1={332 + i * 52} y1="60" x2={332 + i * 52} y2="600" stroke="#48483F" strokeWidth="2.5" />
    ))}
    {Array.from({ length: 8 }, (_, i) => (
      <line key={`h${i}`} x1="292" y1={104 + i * 66} x2="800" y2={104 + i * 66} stroke="#48483F" strokeWidth="2.5" />
    ))}
    <rect x="292" y="104" width="508" height="330" fill="#F2F2EE" opacity="0.06" />
    <line x1="640" y1="36" x2="640" y2="-30" stroke="#55554E" strokeWidth="3" />
    <ellipse cx="540" cy="592" rx="360" ry="14" fill="#111111" opacity="0.08" />
  </>
)

export const Rooftop: Scene = () => (
  <>
    <rect width="800" height="600" fill="#EDEDEA" />
    <circle cx="640" cy="130" r="150" fill="#F5F5F2" />
    <line x1="0" y1="430" x2="800" y2="430" stroke="#B4B4AE" strokeWidth="3" />
    <rect x="140" y="330" width="150" height="100" fill="#33332E" />
    <circle cx="215" cy="330" r="24" fill="#23231F" stroke="#EDEDEA" strokeWidth="3" />
    <path d="M199 322 A20 20 0 0 1 231 322" fill="none" stroke="#6E6E66" strokeWidth="3" />
    <rect x="330" y="308" width="190" height="122" fill="#3D3D38" />
    <circle cx="425" cy="308" r="27" fill="#2A2A26" stroke="#EDEDEA" strokeWidth="3" />
    <path d="M406 299 A22 22 0 0 1 444 299" fill="none" stroke="#6E6E66" strokeWidth="3" />
    <rect x="570" y="340" width="160" height="90" fill="#2A2A26" />
    <circle cx="650" cy="340" r="21" fill="#1F1F1B" stroke="#EDEDEA" strokeWidth="3" />
    <line x1="290" y1="392" x2="330" y2="392" stroke="#55554E" strokeWidth="6" />
    <line x1="520" y1="392" x2="570" y2="392" stroke="#55554E" strokeWidth="6" />
    <line x1="720" y1="212" x2="720" y2="430" stroke="#8A8A84" strokeWidth="3" />
    <line x1="700" y1="238" x2="740" y2="238" stroke="#8A8A84" strokeWidth="3" />
    <line x1="706" y1="264" x2="734" y2="264" stroke="#8A8A84" strokeWidth="2" />
    <rect x="0" y="430" width="800" height="170" fill="#DDDDD8" />
    <rect x="90" y="452" width="240" height="10" fill="#C9C9C4" />
    <rect x="480" y="472" width="200" height="10" fill="#CFCFC9" />
  </>
)

export const Pipes: Scene = () => (
  <>
    <rect width="800" height="600" fill="#E4E4E0" />
    <rect x="60" y="40" width="680" height="520" fill="#D6D6D1" />
    <rect x="100" y="58" width="600" height="28" fill="#9E9E97" />
    <rect x="100" y="58" width="600" height="8" fill="#111111" opacity="0.15" />
    <rect x="140" y="86" width="34" height="460" fill="#BFBFB9" />
    <rect x="140" y="86" width="8" height="460" fill="#111111" opacity="0.12" />
    <rect x="198" y="86" width="22" height="460" fill="#A8A8A1" />
    <rect x="198" y="86" width="6" height="460" fill="#111111" opacity="0.12" />
    <rect x="244" y="86" width="46" height="460" fill="#CDCDC7" />
    <rect x="244" y="86" width="10" height="460" fill="#111111" opacity="0.1" />
    <rect x="316" y="140" width="18" height="406" fill="#B5B5AF" />
    <rect x="352" y="140" width="26" height="406" fill="#C6C6C0" />
    <circle cx="470" cy="220" r="38" fill="none" stroke="#55554E" strokeWidth="9" />
    <line x1="470" y1="182" x2="470" y2="258" stroke="#55554E" strokeWidth="7" />
    <line x1="432" y1="220" x2="508" y2="220" stroke="#55554E" strokeWidth="7" />
    <rect x="462" y="258" width="16" height="60" fill="#8A8A84" />
    <circle cx="600" cy="320" r="32" fill="none" stroke="#6E6E66" strokeWidth="8" />
    <line x1="600" y1="288" x2="600" y2="352" stroke="#6E6E66" strokeWidth="6" />
    <line x1="568" y1="320" x2="632" y2="320" stroke="#6E6E66" strokeWidth="6" />
    <rect x="593" y="352" width="14" height="52" fill="#8A8A84" />
    <circle cx="170" cy="170" r="46" fill="#F4F4F0" stroke="#55554E" strokeWidth="7" />
    <line x1="170" y1="170" x2="192" y2="146" stroke="#17171A" strokeWidth="4" strokeLinecap="round" />
    {Array.from({ length: 5 }, (_, i) => {
      const angle = -Math.PI / 2 + (i - 2) * 0.42
      const x1 = 170 + Math.cos(angle) * 34
      const y1 = 170 + Math.sin(angle) * 34
      const x2 = 170 + Math.cos(angle) * 44
      const y2 = 170 + Math.sin(angle) * 44
      return <line key={`t${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#55554E" strokeWidth="3" />
    })}
    <rect x="128" y="300" width="180" height="16" fill="#8A8A84" />
    <rect x="128" y="420" width="180" height="16" fill="#8A8A84" />
  </>
)

export const Units: Scene = () => (
  <>
    <rect width="800" height="600" fill="#EAEAE6" />
    {Array.from({ length: 6 }, (_, i) => {
      const col = i % 3
      const row = Math.floor(i / 3)
      const x = 96 + col * 214
      const y = 64 + row * 250
      const bodyFill = row === 0 ? '#33332E' : '#2C2C27'
      return (
        <g key={`u${i}`}>
          <rect x={x} y={y} width="182" height="218" fill={bodyFill} />
          <rect x={x + 10} y={y + 10} width="162" height="198" fill="none" stroke="#4A4A43" strokeWidth="2" />
          <circle cx={x + 91} cy={y + 96} r="62" fill="#23231F" stroke="#57574F" strokeWidth="3" />
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = ((deg - 90) * Math.PI) / 180
            return (
              <line
                key={deg}
                x1={x + 91}
                y1={y + 96}
                x2={x + 91 + Math.cos(rad) * 54}
                y2={y + 96 + Math.sin(rad) * 54}
                stroke="#6E6E66"
                strokeWidth="6"
                strokeLinecap="round"
              />
            )
          })}
          <circle cx={x + 91} cy={y + 96} r="10" fill="#57574F" />
          <rect x={x + 24} y={y + 186} width="134" height="8" fill="#4A4A43" />
          <circle cx={x + 20} cy={y + 20} r="3" fill="#6E6E66" />
          <circle cx={x + 162} cy={y + 20} r="3" fill="#6E6E66" />
        </g>
      )
    })}
    <rect x="0" y="568" width="800" height="32" fill="#DDDDD8" />
  </>
)

export const Control: Scene = () => (
  <>
    <rect width="800" height="600" fill="#E6E6E2" />
    <rect x="118" y="58" width="564" height="484" fill="#2B2B27" />
    <rect x="168" y="108" width="250" height="152" fill="#1B1B18" stroke="#45453E" strokeWidth="2" />
    <polyline
      points="186,236 222,208 258,222 296,178 330,190 368,148 400,162"
      fill="none"
      stroke="#C7D2CF"
      strokeWidth="3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <line x1="186" y1="242" x2="400" y2="242" stroke="#45453E" strokeWidth="2" strokeDasharray="4 6" />
    {[0, 1, 2].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <rect
          key={`b${row}-${col}`}
          x={470 + col * 52}
          y={116 + row * 52}
          width="36"
          height="36"
          fill="#3A3A33"
          stroke="#17171A"
          strokeWidth="2"
        />
      )),
    )}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <circle key={`l${i}`} cx={188 + i * 40} cy={300} r="4.5" fill={i % 3 === 0 ? '#DFDFD9' : '#55554E'} />
    ))}
    <rect x="168" y="340" width="250" height="6" rx="3" fill="#45453E" />
    <circle cx="256" cy="343" r="11" fill="#C7C7C1" />
    <rect x="168" y="392" width="250" height="6" rx="3" fill="#45453E" />
    <circle cx="350" cy="395" r="11" fill="#C7C7C1" />
    <rect x="470" y="330" width="140" height="72" fill="none" stroke="#45453E" strokeWidth="2" />
    <line x1="482" y1="352" x2="598" y2="352" stroke="#55554E" strokeWidth="3" />
    <line x1="482" y1="372" x2="566" y2="372" stroke="#55554E" strokeWidth="3" />
    <rect x="470" y="430" width="140" height="40" fill="#33332E" stroke="#17171A" strokeWidth="2" />
    <path d="M682 542 C 720 542 740 500 764 500" fill="none" stroke="#17171A" strokeWidth="7" strokeLinecap="round" />
  </>
)

export const Macro: Scene = () => (
  <>
    <defs>
      <radialGradient id={`${'macro'}-bg`} cx="54%" cy="50%" r="80%">
        <stop offset="0%" stopColor="#F0F0EC" />
        <stop offset="100%" stopColor="#D9D9D4" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill={`url(#${'macro'}-bg)`} />
    {[260, 228, 196, 164, 132, 100].map((r, i) => (
      <circle
        key={`c${i}`}
        cx="432"
        cy="300"
        r={r}
        fill="none"
        stroke={i % 2 === 0 ? '#8F8F88' : '#C2C2BC'}
        strokeWidth={i % 2 === 0 ? 3 : 6}
      />
    ))}
    <circle
      cx="432"
      cy="300"
      r="292"
      fill="none"
      stroke="#17171A"
      strokeWidth="10"
      strokeDasharray="180 1656"
      transform="rotate(-64 432 300)"
    />
    <polygon points="432,278 450,289 450,311 432,322 414,311 414,289" fill="#55554E" />
    {Array.from({ length: 24 }, (_, i) => {
      const angle = (i * 15 * Math.PI) / 180
      return (
        <line
          key={`k${i}`}
          x1={432 + Math.cos(angle) * 306}
          y1={300 + Math.sin(angle) * 306}
          x2={432 + Math.cos(angle) * 322}
          y2={300 + Math.sin(angle) * 322}
          stroke="#6E6E66"
          strokeWidth="3"
        />
      )
    })}
    <polygon points="150,470 166,479 166,497 150,506 134,497 134,479" fill="none" stroke="#8A8A84" strokeWidth="3" />
    <polygon points="700,120 714,128 714,144 700,152 686,144 686,128" fill="none" stroke="#8A8A84" strokeWidth="3" />
  </>
)

export const Plan: Scene = () => (
  <>
    <rect width="800" height="600" fill="#F2F2EF" />
    <rect x="48" y="48" width="704" height="504" fill="none" stroke="#3E3E39" strokeWidth="2" />
    <rect x="60" y="60" width="680" height="480" fill="none" stroke="#3E3E39" strokeWidth="1" />
    <g stroke="#33332E">
      <polyline points="140,140 620,140 620,300" fill="none" strokeWidth="7" />
      <polyline points="140,140 140,440 380,440" fill="none" strokeWidth="7" />
      <polyline points="380,440 380,340 620,340" fill="none" strokeWidth="7" />
      <polyline points="620,340 620,300" fill="none" strokeWidth="7" />
      <line x1="380" y1="140" x2="380" y2="240" strokeWidth="4" />
      <line x1="500" y1="140" x2="500" y2="300" strokeWidth="3" />
      <line x1="260" y1="340" x2="260" y2="440" strokeWidth="3" />
    </g>
    <path d="M 380 240 A 56 56 0 0 1 436 296" fill="none" stroke="#55554E" strokeWidth="2" strokeDasharray="5 5" />
    <line x1="380" y1="240" x2="380" y2="296" stroke="#33332E" strokeWidth="5" />
    <line x1="140" y1="480" x2="620" y2="480" stroke="#55554E" strokeWidth="1.5" />
    <line x1="140" y1="466" x2="140" y2="494" stroke="#55554E" strokeWidth="1.5" />
    <line x1="620" y1="466" x2="620" y2="494" stroke="#55554E" strokeWidth="1.5" />
    <line x1="680" y1="140" x2="680" y2="340" stroke="#55554E" strokeWidth="1.5" />
    <line x1="668" y1="140" x2="692" y2="140" stroke="#55554E" strokeWidth="1.5" />
    <line x1="668" y1="340" x2="692" y2="340" stroke="#55554E" strokeWidth="1.5" />
    <line x1="200" y1="90" x2="560" y2="90" stroke="#55554E" strokeWidth="1.5" strokeDasharray="8 6" />
    <circle cx="100" cy="100" r="12" fill="none" stroke="#55554E" strokeWidth="1.5" />
    <line x1="100" y1="82" x2="100" y2="118" stroke="#55554E" strokeWidth="1.5" />
    <line x1="82" y1="100" x2="118" y2="100" stroke="#55554E" strokeWidth="1.5" />
    <rect x="540" y="470" width="200" height="70" fill="none" stroke="#3E3E39" strokeWidth="2" />
    <line x1="540" y1="494" x2="740" y2="494" stroke="#3E3E39" strokeWidth="1.5" />
    <line x1="540" y1="516" x2="740" y2="516" stroke="#3E3E39" strokeWidth="1.5" />
    <line x1="560" y1="505" x2="660" y2="505" stroke="#55554E" strokeWidth="2" />
    <line x1="560" y1="528" x2="640" y2="528" stroke="#55554E" strokeWidth="2" />
  </>
)

export const Room: Scene = () => (
  <>
    <rect width="800" height="600" fill="#EBEBE7" />
    <rect x="210" y="130" width="380" height="310" fill="#E0E0DB" />
    <polygon points="210,440 590,440 800,600 0,600" fill="#D3D3CE" />
    <polygon points="210,130 590,130 800,0 0,0" fill="#EFEFEB" />
    <line x1="210" y1="130" x2="0" y2="0" stroke="#C4C4BE" strokeWidth="2" />
    <line x1="590" y1="130" x2="800" y2="0" stroke="#C4C4BE" strokeWidth="2" />
    <line x1="210" y1="440" x2="0" y2="600" stroke="#C4C4BE" strokeWidth="2" />
    <line x1="590" y1="440" x2="800" y2="600" stroke="#C4C4BE" strokeWidth="2" />
    <rect x="236" y="252" width="132" height="188" fill="#2E2E29" />
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={`s1${i}`} x1="248" y1={272 + i * 30} x2="356" y2={272 + i * 30} stroke="#4E4E47" strokeWidth="5" />
    ))}
    <rect x="432" y="242" width="132" height="198" fill="#35352F" />
    {[0, 1, 2, 3, 4].map((i) => (
      <line key={`s2${i}`} x1="444" y1={262 + i * 32} x2="552" y2={262 + i * 32} stroke="#565650" strokeWidth="5" />
    ))}
    <line x1="302" y1="252" x2="302" y2="170" stroke="#55554E" strokeWidth="6" />
    <line x1="498" y1="242" x2="498" y2="170" stroke="#55554E" strokeWidth="6" />
    <line x1="240" y1="164" x2="560" y2="164" stroke="#8A8A84" strokeWidth="8" />
    <line x1="240" y1="176" x2="560" y2="176" stroke="#6E6E66" strokeWidth="4" />
    <rect x="120" y="40" width="160" height="14" rx="4" fill="#F7F7F4" opacity="0.9" />
    <rect x="520" y="40" width="160" height="14" rx="4" fill="#F7F7F4" opacity="0.9" />
    <rect x="250" y="452" width="110" height="60" fill="#111111" opacity="0.06" />
    <rect x="444" y="452" width="110" height="64" fill="#111111" opacity="0.06" />
  </>
)

