import { useEffect, useState } from "react";
import { fetchUserAndHouseHoldName } from "../../../services/fetchUserService";

export const useHomeScreenHelper = () => {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [householdName, setHouseholdName] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUserAndHouseHoldName();
        setUserName(data.userName);
        setHouseholdName(data.householdName);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    loading,
    userName,
    householdName,
  };
};
