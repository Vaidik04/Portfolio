import * as THREE from "three";

// High-DPI procedural screen renderer for Girvi, JewelBill, and AdvoKosh
export function generateAppScreenTexture(appId: "girvi" | "jewelbill" | "advokosh"): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 2240;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // 1. Base dark background (#090B10)
  ctx.fillStyle = "#090B10";
  ctx.fillRect(0, 0, 1080, 2240);

  // Gradient background fill
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 2240);
  bgGrad.addColorStop(0, "#10131C");
  bgGrad.addColorStop(0.5, "#08090D");
  bgGrad.addColorStop(1, "#05060A");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 2240);

  // 2. Status Bar
  ctx.fillStyle = "#9A9A9F";
  ctx.font = "bold 38px 'JetBrains Mono', monospace";
  ctx.fillText("09:41", 80, 110);

  // 5G & Battery indicators
  ctx.textAlign = "right";
  ctx.fillStyle = "#3DDC84";
  ctx.fillText("5G · 100%", 1000, 110);
  ctx.textAlign = "left";

  if (appId === "girvi") {
    // GIRVI (गिरवी) - Sovereign Gold Loan Ledger
    // Accent: Android Green #3DDC84
    ctx.fillStyle = "#3DDC84";
    ctx.font = "bold 56px 'Space Grotesk', sans-serif";
    ctx.fillText("GIRVI · गिरवी", 80, 260);

    ctx.fillStyle = "#9A9A9F";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("OFFLINE GOLD LOAN & PLEDGE LEDGER", 80, 315);

    // Permission Badge
    ctx.fillStyle = "rgba(61, 220, 132, 0.12)";
    ctx.strokeStyle = "rgba(61, 220, 132, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(80, 360, 480, 60, 30);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#3DDC84";
    ctx.font = "bold 26px 'JetBrains Mono', monospace";
    ctx.fillText("🛡️ ZERO INTERNET PERMISSION", 110, 400);

    // Primary Balance Card
    ctx.fillStyle = "#121520";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(80, 480, 920, 440, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#9A9A9F";
    ctx.font = "28px 'JetBrains Mono', monospace";
    ctx.fillText("ACTIVE PLEDGES (TODAY)", 130, 560);

    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 88px 'Space Grotesk', sans-serif";
    ctx.fillText("₹24,85,600", 130, 680);

    ctx.fillStyle = "#3DDC84";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("● 100% Offline Vault · Compound Interest Active", 130, 780);
    ctx.fillText("● CameraX Photo Evidence Attached (22K Gold)", 130, 835);

    // Recent Ledger Items
    const rows = [
      { name: "Mukesh Soni (Gwalior)", item: "Necklace 22K (42.5g)", amount: "₹1,45,000", status: "Active" },
      { name: "Rameshwar Jewellers", item: "Bangles 20K (68.2g)", amount: "₹2,10,000", status: "Active" },
      { name: "Devendra Verma", item: "Gold Coins 24K (20.0g)", amount: "₹1,56,800", status: "Released" },
    ];

    rows.forEach((r, idx) => {
      const y = 980 + idx * 260;
      ctx.fillStyle = "#0F121B";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      ctx.roundRect(80, y, 920, 220, 28);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ECE8DF";
      ctx.font = "bold 38px 'Space Grotesk', sans-serif";
      ctx.fillText(r.name, 120, y + 75);

      ctx.fillStyle = "#9A9A9F";
      ctx.font = "28px 'JetBrains Mono', monospace";
      ctx.fillText(r.item, 120, y + 140);

      ctx.textAlign = "right";
      ctx.fillStyle = "#3DDC84";
      ctx.font = "bold 44px 'JetBrains Mono', monospace";
      ctx.fillText(r.amount, 960, y + 85);

      ctx.fillStyle = r.status === "Active" ? "#F5C26B" : "#9A9A9F";
      ctx.font = "26px 'JetBrains Mono', monospace";
      ctx.fillText(r.status, 960, y + 145);
      ctx.textAlign = "left";
    });

  } else if (appId === "jewelbill") {
    // JEWELBILL - Thermal Jewellery POS
    // Accent: Warm Gold #F5C26B
    ctx.fillStyle = "#F5C26B";
    ctx.font = "bold 56px 'Space Grotesk', sans-serif";
    ctx.fillText("JEWELBILL · POS", 80, 260);

    ctx.fillStyle = "#9A9A9F";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("BLUETOOTH ESC/POS 80mm THERMAL INVOICE", 80, 315);

    // Multi-karat Badge
    ctx.fillStyle = "rgba(245, 194, 107, 0.12)";
    ctx.strokeStyle = "rgba(245, 194, 107, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(80, 360, 480, 60, 30);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#F5C26B";
    ctx.font = "bold 26px 'JetBrains Mono', monospace";
    ctx.fillText("⚖️ 24K / 22K / 18K STONE DEDUCTION", 110, 400);

    // Primary Card
    ctx.fillStyle = "#121520";
    ctx.strokeStyle = "rgba(245, 194, 107, 0.2)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(80, 480, 920, 440, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#9A9A9F";
    ctx.font = "28px 'JetBrains Mono', monospace";
    ctx.fillText("INVOICE #JB-2026-8941", 130, 560);

    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 88px 'Space Grotesk', sans-serif";
    ctx.fillText("₹2,84,650", 130, 680);

    ctx.fillStyle = "#F5C26B";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("● Split CGST 1.5% + SGST 1.5% (HSN 7113)", 130, 780);
    ctx.fillText("● Thermal ESC/POS Print Dispatched in 240ms", 130, 835);

    // Line Items
    const items = [
      { desc: "Gold Chain 22K (Gross 38.4g, Net 36.8g)", tax: "CGST ₹2,108.64", total: "₹2,81,152" },
      { desc: "Diamond Ring 18K (Stone 1.20 ct)", tax: "CGST ₹642.00", total: "₹85,600" },
      { desc: "Silver Coins 99.9% (250g)", tax: "CGST ₹345.00", total: "₹23,000" },
    ];

    items.forEach((it, idx) => {
      const y = 980 + idx * 260;
      ctx.fillStyle = "#0F121B";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      ctx.roundRect(80, y, 920, 220, 28);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ECE8DF";
      ctx.font = "bold 34px 'Space Grotesk', sans-serif";
      ctx.fillText(it.desc, 120, y + 75);

      ctx.fillStyle = "#9A9A9F";
      ctx.font = "28px 'JetBrains Mono', monospace";
      ctx.fillText(it.tax, 120, y + 140);

      ctx.textAlign = "right";
      ctx.fillStyle = "#F5C26B";
      ctx.font = "bold 44px 'JetBrains Mono', monospace";
      ctx.fillText(it.total, 960, y + 95);
      ctx.textAlign = "left";
    });

  } else {
    // ADVOKOSH (एडवोकोश) - Advocate Diary & Court OS
    // Accent: Violet #7C5CFF
    ctx.fillStyle = "#7C5CFF";
    ctx.font = "bold 56px 'Space Grotesk', sans-serif";
    ctx.fillText("ADVOKOSH · एडवोकोश", 80, 260);

    ctx.fillStyle = "#9A9A9F";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("ADVOCATE CHAMBER OS · SQLCIPHER AES-256", 80, 315);

    // Security Badge
    ctx.fillStyle = "rgba(124, 92, 255, 0.12)";
    ctx.strokeStyle = "rgba(124, 92, 255, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(80, 360, 480, 60, 30);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#7C5CFF";
    ctx.font = "bold 26px 'JetBrains Mono', monospace";
    ctx.fillText("🔒 HARDWARE KEYSTORE MASTERKEY", 110, 400);

    // Primary Card
    ctx.fillStyle = "#121520";
    ctx.strokeStyle = "rgba(124, 92, 255, 0.2)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(80, 480, 920, 440, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#9A9A9F";
    ctx.font = "28px 'JetBrains Mono', monospace";
    ctx.fillText("TODAY'S CAUSE LIST (COURT 4)", 130, 560);

    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 88px 'Space Grotesk', sans-serif";
    ctx.fillText("Item #14 · 10:30 AM", 130, 680);

    ctx.fillStyle = "#7C5CFF";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("● Limitation Alert: 14 Days Remaining", 130, 780);
    ctx.fillText("● BNS Section 103 (Old IPC 302) Auto-Mapped", 130, 835);

    // Cases
    const cases = [
      { title: "State vs. Sharma & Ors.", cnr: "CNR: MPGW010049282024", court: "High Court Bench", stage: "Evidence" },
      { title: "Verma Enterprises vs. Union Bank", cnr: "CNR: MPGW010038192023", court: "DRT Jabalpur", stage: "Arguments" },
      { title: "In re: Bail Application #891", cnr: "CNR: MPGW010091822026", court: "Sessions Court", stage: "Hearing" },
    ];

    cases.forEach((c, idx) => {
      const y = 980 + idx * 260;
      ctx.fillStyle = "#0F121B";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      ctx.roundRect(80, y, 920, 220, 28);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ECE8DF";
      ctx.font = "bold 36px 'Space Grotesk', sans-serif";
      ctx.fillText(c.title, 120, y + 75);

      ctx.fillStyle = "#9A9A9F";
      ctx.font = "28px 'JetBrains Mono', monospace";
      ctx.fillText(c.cnr + " · " + c.court, 120, y + 140);

      ctx.textAlign = "right";
      ctx.fillStyle = "#7C5CFF";
      ctx.font = "bold 36px 'JetBrains Mono', monospace";
      ctx.fillText(c.stage, 960, y + 105);
      ctx.textAlign = "left";
    });
  }

  // 3. Android Home Bar
  ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
  ctx.beginPath();
  ctx.roundRect(380, 2180, 320, 12, 6);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}
