export default function SharedBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-brand z-0" />
      <div
        className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
}
