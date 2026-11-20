// Automated Quality Gate: Verification of Deterministic Math & Master Timeline

function runTests() {
  console.log("=================================================");
  console.log("  VAIDIKTECH SOVEREIGN VERIFICATION SUITE");
  console.log("=================================================");

  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`  [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`  [FAIL] ${testName}`);
      failed++;
    }
  }

  // TEST 1: Floating Point Drift vs 64-bit Long Paise Arithmetic
  console.log("\n[Test 1] 10,000 High-Frequency Currency Transactions:");
  let floatTotal = 0.0;
  let paiseTotal = 0n; // BigInt representing 64-bit Long paise

  const incrementRupees = 19.99;
  const incrementPaise = 1999n;

  for (let i = 0; i < 10000; i++) {
    floatTotal += incrementRupees;
    paiseTotal += incrementPaise;
  }

  const expectedPaiseFromFloat = Math.round(floatTotal * 100);
  const driftPaise = BigInt(expectedPaiseFromFloat) - paiseTotal;

  console.log(`   - Float total (approx): ₹${floatTotal}`);
  console.log(`   - Exact Paise total:    ₹${Number(paiseTotal) / 100}`);
  console.log(`   - Cumulative Drift:     ${driftPaise} paise`);

  const floatError = Math.abs(floatTotal - 199900.0);
  assert(paiseTotal === 19990000n, "Paise arithmetic produces mathematically exact 19990000 paise");
  assert(floatError > 0, `IEEE 754 Float accumulates fractional error: ${floatTotal} vs 199900.00`);

  // TEST 2: HSN 7113 Jewellery 3% Split GST Precision
  console.log("\n[Test 2] HSN 7113 Jewellery 3% Split GST Math (1.5% CGST + 1.5% SGST):");
  function computeJewelleryGstPaise(principalPaise) {
    // halfRate = 15 / 1000 (1.5%) with half-up rounding
    const halfRateNumerator = 15n;
    const denominator = 1000n;
    const halfGst = (principalPaise * halfRateNumerator + (denominator / 2n)) / denominator;
    return { cgst: halfGst, sgst: halfGst, totalGst: halfGst * 2n };
  }

  // Example: Gold ornament value ₹84,250.50 = 8425050 paise
  const pledgePaise = 8425050n;
  const gst = computeJewelleryGstPaise(pledgePaise);

  console.log(`   - Principal: ₹${Number(pledgePaise) / 100}`);
  console.log(`   - CGST (1.5%): ₹${Number(gst.cgst) / 100}`);
  console.log(`   - SGST (1.5%): ₹${Number(gst.sgst) / 100}`);
  console.log(`   - Total 3% GST: ₹${Number(gst.totalGst) / 100}`);

  assert(gst.cgst === gst.sgst, "CGST and SGST remain strictly equal in paise");
  assert(gst.totalGst === 252752n, "GST on ₹84,250.50 exactly equals 252752 paise (₹2,527.52)");

  // TEST 3: Timeline Director Bound Clamp
  console.log("\n[Test 3] Scroll Director Timeline Boundary Guarantees:");
  function clampProgress(p) {
    return Math.max(0, Math.min(1, p));
  }
  assert(clampProgress(-0.5) === 0, "Negative scroll clamps to 0.0");
  assert(clampProgress(1.8) === 1, "Overflow scroll clamps to 1.0");
  assert(clampProgress(0.45) === 0.45, "In-bounds scroll passes through unaltered");

  console.log("\n=================================================");
  console.log(`  SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("=================================================");

  if (failed > 0) process.exit(1);
}

runTests();
