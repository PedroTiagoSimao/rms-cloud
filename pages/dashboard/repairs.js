import ListRepairs from "../../components/repairs"
import { useEffect, useState } from "react";

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);

  const getRepairs = async () => {
    const res = await fetch("https://rms-cloud.pockethost.io/api/collections/repairs/records");
    const data = await res.json();
    setRepairs(data.items);
  };

  useEffect(() => {
    getRepairs();
  }, []);

  if (repairs.length === 0) {
    return <p>loading</p>;
  }

  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListRepairs repairs={repairs} />
      </div>
    </main>
  )
}

export default Repairs