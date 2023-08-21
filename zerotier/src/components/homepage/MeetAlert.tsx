import Link from "next/link";

function MeetAlert() {
  return (
    <div className="section text-center py-10 text-xl">
      🔔 Meet Team ZeroTier:{" "}
      <Link className="underline" href={"#"}>
        ZeroTier at Black Hat USA 2023 & DEF CON 31
      </Link>
    </div>
  );
}

export default MeetAlert;
