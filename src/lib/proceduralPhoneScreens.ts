import * as THREE from "three";

// Safe cross-browser rounded rectangle using quadratic curves
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export function generateAppScreenTexture(
  appId: "girvi" | "jewelbill" | "advokosh"
): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null;

  try {
    // 1080x2340 Quad HD+ resolution for native AMOLED mobile clarity
    const width = 1080;
    const height = 2340;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // 1. Deep Obsidian AMOLED Canvas Background
    ctx.fillStyle = "#07080D";
    ctx.fillRect(0, 0, width, height);

    // Accent Colors
    const primaryColor =
      appId === "girvi"
        ? "#3DDC84"
        : appId === "jewelbill"
        ? "#F5C26B"
        : "#7C5CFF";

    const secondaryColor =
      appId === "girvi"
        ? "#22D3EE"
        : appId === "jewelbill"
        ? "#E5A93C"
        : "#A78BFA";

    // Top Radial Ambient Glow
    const grad = ctx.createRadialGradient(
      width / 2,
      280,
      30,
      width / 2,
      280,
      650
    );
    grad.addColorStop(0, appId === "girvi" ? "rgba(61, 220, 132, 0.28)" : appId === "jewelbill" ? "rgba(245, 194, 107, 0.28)" : "rgba(124, 92, 255, 0.28)");
    grad.addColorStop(1, "rgba(7, 8, 13, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 2. Android 15 Status Bar (Crisp typography & iconography)
    ctx.fillStyle = "#ECE8DF";
    ctx.font = "bold 40px system-ui, -apple-system, sans-serif";
    ctx.fillText("09:41", 80, 118);

    ctx.textAlign = "right";
    ctx.font = "bold 32px monospace";
    ctx.fillStyle = "#A0A5B5";
    ctx.fillText("5G+ · 100%", width - 110, 118);

    // Battery pill
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 3;
    drawRoundedRect(ctx, width - 95, 90, 52, 28, 7);
    ctx.stroke();
    ctx.fillStyle = primaryColor;
    ctx.fillRect(width - 91, 94, 38, 20);
    ctx.textAlign = "left";

    // Camera punch-hole cutout at top center
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(width / 2, 105, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // =========================================================================
    // APP 1: GIRVI (गिरवी) — Pawn & Gold Loan Sovereign Ledger
    // =========================================================================
    if (appId === "girvi") {
      // Header
      ctx.fillStyle = "#3DDC84";
      ctx.font = "bold 60px system-ui, -apple-system, sans-serif";
      ctx.fillText("GIRVI · गिरवी", 80, 260);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "500 28px monospace";
      ctx.fillText("Sovereign Pawn & Gold Loan Ledger OS", 80, 310);

      // Air-Gapped Security Pill
      ctx.fillStyle = "rgba(61, 220, 132, 0.16)";
      ctx.strokeStyle = "rgba(61, 220, 132, 0.5)";
      ctx.lineWidth = 2.5;
      drawRoundedRect(ctx, 80, 350, 580, 58, 29);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#3DDC84";
      ctx.font = "bold 24px monospace";
      ctx.fillText("🛡️ ZERO INTERNET PERMISSION (OFFLINE)", 110, 388);

      // Main Balance Vault Card
      ctx.fillStyle = "#0E131D";
      ctx.strokeStyle = "rgba(61, 220, 132, 0.45)";
      ctx.lineWidth = 3.5;
      drawRoundedRect(ctx, 80, 440, width - 160, 470, 36);
      ctx.fill();
      ctx.stroke();

      // Card Header Ribbon
      ctx.fillStyle = "rgba(61, 220, 132, 0.12)";
      ctx.fillRect(80, 440, width - 160, 90);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "bold 26px monospace";
      ctx.fillText("ACTIVE PLEDGES IN VAULT", 120, 500);

      ctx.fillStyle = "#3DDC84";
      ctx.textAlign = "right";
      ctx.font = "bold 26px monospace";
      ctx.fillText("100% LOCAL SQLITE", width - 120, 500);
      ctx.textAlign = "left";

      // Big Rupee Amount
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 98px system-ui, -apple-system, sans-serif";
      ctx.fillText("₹24,85,600", 120, 630);

      // Long-paise exact integer badge
      ctx.fillStyle = "rgba(61, 220, 132, 0.18)";
      ctx.strokeStyle = "rgba(61, 220, 132, 0.5)";
      ctx.lineWidth = 2;
      drawRoundedRect(ctx, 120, 670, 540, 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#3DDC84";
      ctx.font = "bold 22px monospace";
      ctx.fillText("248,560,000 Long-Paise (0.0000% Drift)", 140, 702);

      // Micro features
      ctx.fillStyle = "#9BA1B2";
      ctx.font = "500 26px monospace";
      ctx.fillText("● CameraX 22K Photo Evidence Sealed", 120, 770);
      ctx.fillText("● Monthly Compound Interest Engine Active", 120, 815);
      ctx.fillText("● Hardware AES-256 Storage Invariant", 120, 860);

      // Section Title
      ctx.fillStyle = "#ECE8DF";
      ctx.font = "bold 38px system-ui, -apple-system, sans-serif";
      ctx.fillText("Recent Pledge Records", 80, 970);

      // List Rows
      const rows = [
        { name: "Mukesh Soni (Gwalior)", item: "Necklace 22K (42.5g)", amount: "₹1,45,000", tag: "VERIFIED", color: "#3DDC84" },
        { name: "Rameshwar Jewellers", item: "Bangles 20K (68.2g)", amount: "₹2,10,000", tag: "ACTIVE", color: "#22D3EE" },
        { name: "Devendra Verma", item: "Gold Coins 24K (20.0g)", amount: "₹1,56,800", tag: "RELEASED", color: "#F5C26B" },
        { name: "Kailash Chand & Sons", item: "Bridal Set 22K (114g)", amount: "₹4,85,000", tag: "ACTIVE", color: "#3DDC84" },
      ];

      rows.forEach((r, idx) => {
        const y = 1020 + idx * 225;
        ctx.fillStyle = "#0D111A";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        drawRoundedRect(ctx, 80, y, width - 160, 195, 28);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 36px system-ui, -apple-system, sans-serif";
        ctx.fillText(r.name, 120, y + 65);

        ctx.fillStyle = "#8E94A5";
        ctx.font = "26px monospace";
        ctx.fillText(r.item, 120, y + 115);

        ctx.fillStyle = "#3DDC84";
        ctx.textAlign = "right";
        ctx.font = "bold 42px system-ui, -apple-system, sans-serif";
        ctx.fillText(r.amount, width - 120, y + 80);

        ctx.font = "bold 20px monospace";
        ctx.fillStyle = r.color;
        ctx.fillText(r.tag, width - 120, y + 130);
        ctx.textAlign = "left";
      });

      // Bottom Material You CTA Button
      ctx.fillStyle = "#3DDC84";
      drawRoundedRect(ctx, width / 2 - 240, height - 210, 480, 84, 42);
      ctx.fill();

      ctx.fillStyle = "#05060A";
      ctx.textAlign = "center";
      ctx.font = "bold 32px system-ui, -apple-system, sans-serif";
      ctx.fillText("+ New Gold Pledge", width / 2, height - 156);
      ctx.textAlign = "left";
    }

    // =========================================================================
    // APP 2: JEWELBILL (ज्वेलबिल) — Thermal POS & Split Tax Engine
    // =========================================================================
    else if (appId === "jewelbill") {
      ctx.fillStyle = "#F5C26B";
      ctx.font = "bold 60px system-ui, -apple-system, sans-serif";
      ctx.fillText("JewelBill · POS", 80, 260);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "500 28px monospace";
      ctx.fillText("High-Speed Thermal Bluetooth POS Engine", 80, 310);

      // Thermal Print Speed Pill
      ctx.fillStyle = "rgba(245, 194, 107, 0.16)";
      ctx.strokeStyle = "rgba(245, 194, 107, 0.5)";
      ctx.lineWidth = 2.5;
      drawRoundedRect(ctx, 80, 350, 600, 58, 29);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#F5C26B";
      ctx.font = "bold 24px monospace";
      ctx.fillText("⚡ 240ms DIRECT ESC/POS PRINT (HSN 7113)", 110, 388);

      // Tax Invoice Card
      ctx.fillStyle = "#18140C";
      ctx.strokeStyle = "rgba(245, 194, 107, 0.45)";
      ctx.lineWidth = 3.5;
      drawRoundedRect(ctx, 80, 440, width - 160, 500, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(245, 194, 107, 0.12)";
      ctx.fillRect(80, 440, width - 160, 90);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "bold 26px monospace";
      ctx.fillText("TAX INVOICE #JB-2026-1048", 120, 500);

      ctx.fillStyle = "#F5C26B";
      ctx.textAlign = "right";
      ctx.font = "bold 26px monospace";
      ctx.fillText("CGST 1.5% + SGST 1.5%", width - 120, 500);
      ctx.textAlign = "left";

      // Grand Total
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 98px system-ui, -apple-system, sans-serif";
      ctx.fillText("₹3,88,728", 120, 630);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "26px monospace";
      ctx.fillText("Gross Item: 22K Bridal Necklace (48.20g)", 120, 695);
      ctx.fillText("Gold Rate: ₹7,250/g · Net Weight: 48.20g", 120, 740);
      ctx.fillText("Making Charges (8.0%): ₹27,956.00", 120, 785);
      ctx.fillText("CGST (1.50%): ₹5,661.09 | SGST (1.50%): ₹5,661.09", 120, 830);

      // Exact zero drift verification note
      ctx.fillStyle = "#F5C26B";
      ctx.font = "bold 24px monospace";
      ctx.fillText("Integer Drift: 0.000000 Paise Exact Invariant", 120, 885);

      // Recent Bills
      ctx.fillStyle = "#ECE8DF";
      ctx.font = "bold 38px system-ui, -apple-system, sans-serif";
      ctx.fillText("Counter Station Receipts", 80, 1000);

      const bills = [
        { name: "Sunita Verma", item: "Gold Chain 22K (18.5g)", amount: "₹1,47,200", status: "Printed 240ms" },
        { name: "Rajesh Soni", item: "Diamond Studs 18K", amount: "₹92,400", status: "Printed 240ms" },
        { name: "Anand Jewellers", item: "Gold Bullion 24K (50g)", amount: "₹3,95,000", status: "Printed 240ms" },
      ];

      bills.forEach((b, idx) => {
        const y = 1050 + idx * 225;
        ctx.fillStyle = "#0D111A";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        drawRoundedRect(ctx, 80, y, width - 160, 195, 28);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 36px system-ui, -apple-system, sans-serif";
        ctx.fillText(b.name, 120, y + 65);

        ctx.fillStyle = "#F5C26B";
        ctx.textAlign = "right";
        ctx.font = "bold 42px system-ui, -apple-system, sans-serif";
        ctx.fillText(b.amount, width - 120, y + 75);

        ctx.font = "bold 20px monospace";
        ctx.fillStyle = "#3DDC84";
        ctx.fillText("✓ " + b.status, width - 120, y + 125);
        ctx.textAlign = "left";

        ctx.fillStyle = "#8E94A5";
        ctx.font = "26px monospace";
        ctx.fillText(b.item, 120, y + 120);
      });

      // Bottom Button
      ctx.fillStyle = "#F5C26B";
      drawRoundedRect(ctx, width / 2 - 250, height - 210, 500, 84, 42);
      ctx.fill();

      ctx.fillStyle = "#05060A";
      ctx.textAlign = "center";
      ctx.font = "bold 32px system-ui, -apple-system, sans-serif";
      ctx.fillText("🖨️ Print 80mm ESC/POS", width / 2, height - 156);
      ctx.textAlign = "left";
    }

    // =========================================================================
    // APP 3: ADVOKOSH (एडवोकोश) — Advocate Diary & StrongBox Vault
    // =========================================================================
    else {
      ctx.fillStyle = "#7C5CFF";
      ctx.font = "bold 60px system-ui, -apple-system, sans-serif";
      ctx.fillText("AdvoKosh · एडवोकोश", 80, 260);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "500 28px monospace";
      ctx.fillText("Advocate Diary & Court Limitation Engine", 80, 310);

      // Security Pill
      ctx.fillStyle = "rgba(124, 92, 255, 0.16)";
      ctx.strokeStyle = "rgba(124, 92, 255, 0.5)";
      ctx.lineWidth = 2.5;
      drawRoundedRect(ctx, 80, 350, 620, 58, 29);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#7C5CFF";
      ctx.font = "bold 24px monospace";
      ctx.fillText("🔒 SQLCIPHER 256-BIT STRONGBOX VAULT", 110, 388);

      // Cause List Card
      ctx.fillStyle = "#131021";
      ctx.strokeStyle = "rgba(124, 92, 255, 0.45)";
      ctx.lineWidth = 3.5;
      drawRoundedRect(ctx, 80, 440, width - 160, 480, 36);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(124, 92, 255, 0.12)";
      ctx.fillRect(80, 440, width - 160, 90);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "bold 26px monospace";
      ctx.fillText("HIGH COURT BENCH · COURT 4", 120, 500);

      ctx.fillStyle = "#7C5CFF";
      ctx.textAlign = "right";
      ctx.font = "bold 26px monospace";
      ctx.fillText("TODAY 10:30 AM", width - 120, 500);
      ctx.textAlign = "left";

      // Case Name
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 58px system-ui, -apple-system, sans-serif";
      ctx.fillText("State vs. Sharma & Ors.", 120, 615);

      ctx.fillStyle = "#7C5CFF";
      ctx.font = "bold 28px monospace";
      ctx.fillText("Statute: IPC § 420 ↔ BNS § 318(4)", 120, 680);

      ctx.fillStyle = "#8E94A5";
      ctx.font = "26px monospace";
      ctx.fillText("● Cause of Action: 14 Days Remaining", 120, 745);
      ctx.fillText("● 8 WorkManager Background Sync Workers Active", 120, 790);
      ctx.fillText("● Hardware Keystore AES-256 Key Sealed", 120, 835);

      // Diary Entries
      ctx.fillStyle = "#ECE8DF";
      ctx.font = "bold 38px system-ui, -apple-system, sans-serif";
      ctx.fillText("Today's Chamber Diary", 80, 980);

      const cases = [
        { court: "Court 2 · 11:45 AM", title: "Verma vs. Verma & Anr.", law: "CrPC 438 ↔ BNSS 482 [Anticipatory Bail]" },
        { court: "Court 7 · 02:15 PM", title: "Precision Works vs. UOI", law: "Commercial Suit · Limitation Invariant" },
        { court: "Chamber · 04:30 PM", title: "Client Briefing · New BNS Filing", law: "Confidential Legal Privilege" },
      ];

      cases.forEach((c, idx) => {
        const y = 1030 + idx * 225;
        ctx.fillStyle = "#0D111A";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        drawRoundedRect(ctx, 80, y, width - 160, 195, 28);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#7C5CFF";
        ctx.font = "bold 26px monospace";
        ctx.fillText(c.court, 120, y + 55);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 36px system-ui, -apple-system, sans-serif";
        ctx.fillText(c.title, 120, y + 110);

        ctx.fillStyle = "#8E94A5";
        ctx.font = "24px monospace";
        ctx.fillText(c.law, 120, y + 155);
      });

      // Bottom Button
      ctx.fillStyle = "#7C5CFF";
      drawRoundedRect(ctx, width / 2 - 240, height - 210, 480, 84, 42);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.font = "bold 32px system-ui, -apple-system, sans-serif";
      ctx.fillText("+ New Case File", width / 2, height - 156);
      ctx.textAlign = "left";
    }

    // 3. Android Navigation Pill Bar at Bottom Edge
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    drawRoundedRect(ctx, width / 2 - 120, height - 42, 240, 10, 5);
    ctx.fill();

    // 4. Create Pristine Three.js Texture with ZERO Downsampling Blur
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    // CRITICAL: Disable mipmaps to eliminate texture downsampling blur
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 16;
    texture.needsUpdate = true;

    return texture;
  } catch (err) {
    console.error("Error generating app screen texture:", err);
    return null;
  }
}
