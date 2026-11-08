import * as THREE from "three";

// High-DPI Ultra-Crisp Smartphone AMOLED Screen Generator
// 1440 x 3120 Quad HD+ resolution with true black OLED styling,
// authentic Indian currency formatting, Devanagari typography, and crisp Material 3 cards.

export function generateAppScreenTexture(
  appId: "girvi" | "jewelbill" | "advokosh"
): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;

  const width = 1440;
  const height = 3120;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // 1. True AMOLED Deep Background with Subtle Atmospheric Vignette
  ctx.fillStyle = "#06080D";
  ctx.fillRect(0, 0, width, height);

  // Radial ambient accent glow at top
  const accentColor =
    appId === "girvi"
      ? "rgba(61, 220, 132, 0.15)"
      : appId === "jewelbill"
      ? "rgba(245, 194, 107, 0.15)"
      : "rgba(124, 92, 255, 0.15)";

  const radGrad = ctx.createRadialGradient(
    width / 2,
    450,
    50,
    width / 2,
    450,
    900
  );
  radGrad.addColorStop(0, accentColor);
  radGrad.addColorStop(1, "rgba(6, 8, 13, 0)");
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle background dot matrix / circuit traces
  ctx.fillStyle = "rgba(255, 255, 255, 0.025)";
  for (let x = 80; x < width - 80; x += 60) {
    for (let y = 300; y < height - 200; y += 60) {
      ctx.fillRect(x, y, 2, 2);
    }
  }

  // 2. Android 15 Status Bar
  ctx.fillStyle = "#ECE8DF";
  ctx.font = "bold 44px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("09:41", 100, 140);

  // Status icons (right aligned)
  ctx.textAlign = "right";
  ctx.font = "bold 34px 'JetBrains Mono', monospace";
  ctx.fillStyle = "#8E929E";
  ctx.fillText("5G · 100%", width - 100, 140);

  // Battery pill icon
  ctx.strokeStyle = "#3DDC84";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(width - 90, 112, 54, 28, 6);
  ctx.stroke();
  ctx.fillStyle = "#3DDC84";
  ctx.fillRect(width - 86, 116, 40, 20);
  ctx.textAlign = "left";

  // Punch Hole front camera cutout area at top center
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(width / 2, 130, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // 3. App-Specific UI
  if (appId === "girvi") {
    // =========================================================================
    // 1. GIRVI (गिरवी) - Sovereign Pawn & Gold Loan OS
    // =========================================================================
    // Top Bar Brand
    ctx.fillStyle = "#3DDC84";
    ctx.font = "bold 68px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("GIRVI · गिरवी", 100, 310);

    ctx.fillStyle = "#8E929E";
    ctx.font = "34px 'JetBrains Mono', monospace";
    ctx.fillText("Sovereign Pawn & Gold Loan OS", 100, 370);

    // Air-Gapped Security Pill
    ctx.fillStyle = "rgba(61, 220, 132, 0.12)";
    ctx.strokeStyle = "rgba(61, 220, 132, 0.45)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(100, 420, 680, 72, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#3DDC84";
    ctx.font = "bold 30px 'JetBrains Mono', monospace";
    ctx.fillText("🛡️ ZERO INTERNET PERMISSION", 140, 468);

    // Primary Vault Balance Card
    ctx.fillStyle = "#0F131D";
    ctx.strokeStyle = "rgba(61, 220, 132, 0.3)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(100, 550, width - 200, 560, 44);
    ctx.fill();
    ctx.stroke();

    // Inner subtle glow header
    ctx.fillStyle = "rgba(61, 220, 132, 0.08)";
    ctx.beginPath();
    ctx.roundRect(100, 550, width - 200, 120, [44, 44, 0, 0]);
    ctx.fill();

    ctx.fillStyle = "#8E929E";
    ctx.font = "bold 32px 'JetBrains Mono', monospace";
    ctx.fillText("ACTIVE PLEDGES IN VAULT", 160, 625);

    ctx.fillStyle = "#3DDC84";
    ctx.textAlign = "right";
    ctx.fillText("100% OFFLINE", width - 160, 625);
    ctx.textAlign = "left";

    // Big Rupee Amount
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 116px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("₹24,85,600", 160, 785);

    // Integer Paise Invariant Pill
    ctx.fillStyle = "rgba(61, 220, 132, 0.14)";
    ctx.strokeStyle = "rgba(61, 220, 132, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(160, 830, 620, 56, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#3DDC84";
    ctx.font = "bold 26px 'JetBrains Mono', monospace";
    ctx.fillText("248,560,000 Long-Paise · 0.0000% Drift", 190, 868);

    ctx.fillStyle = "#8E929E";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("● CameraX 22K Photo Evidence Attached", 160, 940);
    ctx.fillText("● Monthly Compound Interest Engine Active", 160, 995);
    ctx.fillText("● Hardware AES-256 Storage Invariant", 160, 1050);

    // Section Title
    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 44px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("Recent Pledge Records", 100, 1180);

    // Pledge List Items
    const pledges = [
      {
        name: "Mukesh Soni (Gwalior)",
        item: "Necklace 22K (42.50g Net)",
        amount: "₹1,45,000",
        date: "Today, 11:20 AM",
        badge: "VERIFIED",
        accent: "#3DDC84",
      },
      {
        name: "Rameshwar Jewellers",
        item: "Bangles 20K (68.20g Net)",
        amount: "₹2,10,000",
        date: "Yesterday",
        badge: "ACTIVE",
        accent: "#3DDC84",
      },
      {
        name: "Devendra Verma",
        item: "Gold Coins 24K (20.00g)",
        amount: "₹1,56,800",
        date: "Nov 04, 2026",
        badge: "RELEASED",
        accent: "#8E929E",
      },
      {
        name: "Kailash Chand & Sons",
        item: "Bridal Set 22K (114.50g)",
        amount: "₹4,85,000",
        date: "Nov 02, 2026",
        badge: "ACTIVE",
        accent: "#3DDC84",
      },
    ];

    pledges.forEach((p, idx) => {
      const y = 1230 + idx * 290;
      ctx.fillStyle = "#0E1119";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(100, y, width - 200, 255, 36);
      ctx.fill();
      ctx.stroke();

      // Customer name
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(p.name, 150, y + 75);

      // Status Badge
      ctx.fillStyle = p.badge === "RELEASED" ? "rgba(142, 146, 158, 0.15)" : "rgba(61, 220, 132, 0.15)";
      ctx.strokeStyle = p.badge === "RELEASED" ? "rgba(142, 146, 158, 0.4)" : "rgba(61, 220, 132, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(width - 320, y + 35, 170, 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = p.accent;
      ctx.textAlign = "center";
      ctx.font = "bold 24px 'JetBrains Mono', monospace";
      ctx.fillText(p.badge, width - 235, y + 68);
      ctx.textAlign = "left";

      // Item & weight
      ctx.fillStyle = "#8E929E";
      ctx.font = "32px 'JetBrains Mono', monospace";
      ctx.fillText(p.item, 150, y + 135);
      ctx.fillText(p.date, 150, y + 185);

      // Amount
      ctx.fillStyle = "#3DDC84";
      ctx.textAlign = "right";
      ctx.font = "bold 52px 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(p.amount, width - 150, y + 175);
      ctx.textAlign = "left";
    });

    // Bottom Compose FAB / Action Pill
    ctx.fillStyle = "#3DDC84";
    ctx.beginPath();
    ctx.roundRect(width / 2 - 260, height - 260, 520, 96, 48);
    ctx.fill();

    ctx.fillStyle = "#05060A";
    ctx.textAlign = "center";
    ctx.font = "bold 38px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("+ New Gold Pledge", width / 2, height - 200);
    ctx.textAlign = "left";
  } else if (appId === "jewelbill") {
    // =========================================================================
    // 2. JEWELBILL - Jewellery POS & 240ms Thermal Invoicing
    // =========================================================================
    ctx.fillStyle = "#F5C26B";
    ctx.font = "bold 68px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("JewelBill · ज्वेलबिल", 100, 310);

    ctx.fillStyle = "#8E929E";
    ctx.font = "34px 'JetBrains Mono', monospace";
    ctx.fillText("High-Speed POS & Thermal ESC/POS Engine", 100, 370);

    // 240ms Print Banner
    ctx.fillStyle = "rgba(245, 194, 107, 0.12)";
    ctx.strokeStyle = "rgba(245, 194, 107, 0.45)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(100, 420, 720, 72, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#F5C26B";
    ctx.font = "bold 30px 'JetBrains Mono', monospace";
    ctx.fillText("⚡ 240ms DIRECT ESC/POS PRINT", 140, 468);

    // Active Invoice Summary Card
    ctx.fillStyle = "#14120D";
    ctx.strokeStyle = "rgba(245, 194, 107, 0.3)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(100, 550, width - 200, 640, 44);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(245, 194, 107, 0.08)";
    ctx.beginPath();
    ctx.roundRect(100, 550, width - 200, 120, [44, 44, 0, 0]);
    ctx.fill();

    ctx.fillStyle = "#8E929E";
    ctx.font = "bold 32px 'JetBrains Mono', monospace";
    ctx.fillText("TAX INVOICE #JB-2026-1048", 160, 625);

    ctx.fillStyle = "#F5C26B";
    ctx.textAlign = "right";
    ctx.fillText("HSN 7113", width - 160, 625);
    ctx.textAlign = "left";

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 116px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("₹3,88,728", 160, 785);

    // Tax Split Row
    ctx.fillStyle = "#8E929E";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("Gross Item: 22K Bridal Necklace (48.20g)", 160, 860);
    ctx.fillText("Gold Rate: ₹7,250/g · Net Weight: 48.20g", 160, 915);
    ctx.fillText("Making Charges (8.0%): ₹27,956.00", 160, 970);
    ctx.fillText("CGST (1.50%): ₹5,661.09", 160, 1025);
    ctx.fillText("SGST (1.50%): ₹5,661.09", 160, 1080);
    ctx.fillText("Float Drift Invariant: 0.000000 Paise", 160, 1135);

    // Recent Counter Bills
    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 44px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("Counter Station Receipts", 100, 1260);

    const bills = [
      {
        customer: "Sunita Verma",
        item: "Gold Chain 22K (18.5g)",
        total: "₹1,47,200",
        status: "Printed 240ms",
      },
      {
        customer: "Rajesh Soni",
        item: "Diamond Studs 18K",
        total: "₹92,400",
        status: "Printed 240ms",
      },
      {
        customer: "Anand Jewellers",
        item: "Gold Bullion 24K (50g)",
        total: "₹3,95,000",
        status: "Printed 240ms",
      },
    ];

    bills.forEach((b, idx) => {
      const y = 1320 + idx * 270;
      ctx.fillStyle = "#0E1119";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(100, y, width - 200, 235, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 42px 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(b.customer, 150, y + 75);

      ctx.fillStyle = "#F5C26B";
      ctx.textAlign = "right";
      ctx.font = "bold 48px 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(b.total, width - 150, y + 75);
      ctx.textAlign = "left";

      ctx.fillStyle = "#8E929E";
      ctx.font = "30px 'JetBrains Mono', monospace";
      ctx.fillText(b.item, 150, y + 140);

      ctx.fillStyle = "#3DDC84";
      ctx.fillText("✓ " + b.status, 150, y + 190);
    });

    // Print Receipt Trigger
    ctx.fillStyle = "#F5C26B";
    ctx.beginPath();
    ctx.roundRect(width / 2 - 280, height - 260, 560, 96, 48);
    ctx.fill();

    ctx.fillStyle = "#05060A";
    ctx.textAlign = "center";
    ctx.font = "bold 38px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("🖨️ Print 80mm ESC/POS", width / 2, height - 200);
    ctx.textAlign = "left";
  } else {
    // =========================================================================
    // 3. ADVOKOSH (एडवोकोश) - Sovereign Advocate Diary
    // =========================================================================
    ctx.fillStyle = "#7C5CFF";
    ctx.font = "bold 68px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("AdvoKosh · एडवोकोश", 100, 310);

    ctx.fillStyle = "#8E929E";
    ctx.font = "34px 'JetBrains Mono', monospace";
    ctx.fillText("Advocate Diary & Limitation Engine", 100, 370);

    // Cryptographic Vault Pill
    ctx.fillStyle = "rgba(124, 92, 255, 0.12)";
    ctx.strokeStyle = "rgba(124, 92, 255, 0.45)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(100, 420, 740, 72, 36);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#7C5CFF";
    ctx.font = "bold 30px 'JetBrains Mono', monospace";
    ctx.fillText("🔒 SQLCIPHER 256-BIT STRONGBOX", 140, 468);

    // Active Court Hearing Card
    ctx.fillStyle = "#120F1D";
    ctx.strokeStyle = "rgba(124, 92, 255, 0.35)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(100, 550, width - 200, 580, 44);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(124, 92, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(100, 550, width - 200, 120, [44, 44, 0, 0]);
    ctx.fill();

    ctx.fillStyle = "#8E929E";
    ctx.font = "bold 32px 'JetBrains Mono', monospace";
    ctx.fillText("HIGH COURT BENCH · COURT 4", 160, 625);

    ctx.fillStyle = "#7C5CFF";
    ctx.textAlign = "right";
    ctx.fillText("TODAY 10:30 AM", width - 160, 625);
    ctx.textAlign = "left";

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 64px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("State vs. Sharma & Ors.", 160, 745);

    ctx.fillStyle = "#ECE8DF";
    ctx.font = "36px 'JetBrains Mono', monospace";
    ctx.fillText("Offence: Cheating & Dishonesty", 160, 830);

    ctx.fillStyle = "#7C5CFF";
    ctx.font = "bold 34px 'JetBrains Mono', monospace";
    ctx.fillText("Statute: IPC 420 ↔ BNS § 318(4)", 160, 890);

    ctx.fillStyle = "#8E929E";
    ctx.font = "32px 'JetBrains Mono', monospace";
    ctx.fillText("● Cause of Action Limitation: 14 Days Remaining", 160, 960);
    ctx.fillText("● 8 WorkManager Background Sync Workers Active", 160, 1015);
    ctx.fillText("● Hardware Keystore AES-256 Key Sealed", 160, 1070);

    // Cause List
    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 44px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("Today's Chamber Diary", 100, 1200);

    const cases = [
      {
        court: "Court 2 · 11:45 AM",
        title: "Verma vs. Verma & Anr.",
        statute: "CrPC 438 ↔ BNSS 482 [Anticipatory Bail]",
        badge: "HEARING",
      },
      {
        court: "Court 7 · 02:15 PM",
        title: "M/s Precision Works vs. UOI",
        statute: "Commercial Suit · Limitation Safe",
        badge: "FINAL ORDER",
      },
      {
        court: "Chamber · 04:30 PM",
        title: "Client Briefing · New BNS Filing",
        statute: "Confidential Legal Privilege",
        badge: "BRIEFING",
      },
    ];

    cases.forEach((c, idx) => {
      const y = 1260 + idx * 280;
      ctx.fillStyle = "#0E1119";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(100, y, width - 200, 245, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#7C5CFF";
      ctx.font = "bold 32px 'JetBrains Mono', monospace";
      ctx.fillText(c.court, 150, y + 65);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 44px 'Segoe UI', Roboto, sans-serif";
      ctx.fillText(c.title, 150, y + 130);

      ctx.fillStyle = "#8E929E";
      ctx.font = "30px 'JetBrains Mono', monospace";
      ctx.fillText(c.statute, 150, y + 190);
    });

    // Action FAB
    ctx.fillStyle = "#7C5CFF";
    ctx.beginPath();
    ctx.roundRect(width / 2 - 260, height - 260, 520, 96, 48);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.font = "bold 38px 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("+ New Case File", width / 2, height - 200);
    ctx.textAlign = "left";
  }

  // 4. Create High-Fidelity Three.js CanvasTexture with Anisotropic Filtering & sRGB
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  texture.needsUpdate = true;

  return texture;
}
