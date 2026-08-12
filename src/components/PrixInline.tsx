"use client";

import { usePrixMin } from "@/lib/usePrixMin";

export function PrixBottle({ slug }: { slug: string }) {
  const prix = usePrixMin(slug);
  if (!prix) return null;
  return (
    <>
      {" "}
      · à partir de {prix.value.toFixed(2)} {prix.devise}
    </>
  );
}

export function PrixPopRow({ slug }: { slug: string }) {
  const prix = usePrixMin(slug);
  if (!prix) return <>—</>;
  return (
    <>
      <span className="from">à partir de</span>
      {prix.value.toFixed(2)} {prix.devise}
    </>
  );
}

export function PrixFicheQuick({ slug }: { slug: string }) {
  const prix = usePrixMin(slug);
  if (!prix) return <div />;
  return (
    <div>
      <div className="lbl">À partir de</div>
      <div className="val">
        {prix.value.toFixed(2)} {prix.devise}
      </div>
    </div>
  );
}
