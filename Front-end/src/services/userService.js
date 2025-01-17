import userData from "../mocked-data/user-main-data.json";
import activityData from "../mocked-data/user-activity-data.json";
import AverageSessionData from "../mocked-data/user-average-session-data.json";
import performanceData from "../mocked-data/user-performances-data.json";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const USE_MOCKED_DATA = import.meta.env.VITE_APP_USE_MOCKED_DATA === "true";

const getMockedUserData = () => userData.data;
const getMockedActivityData = () => activityData.data;
const getMockedAverageSessionData = () => AverageSessionData.data;
const getMockedPerformanceData = () => performanceData.data;

const fetchUserData = async (userId) => {
  if (USE_MOCKED_DATA) {
    return getMockedUserData();
  }
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur:",
      error,
    );
    throw error;
  }
};

export const fetchActivityData = async (userId) => {
  if (USE_MOCKED_DATA) {
    return getMockedActivityData();
  }
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données d'activité:",
      error,
    );
    throw error;
  }
};

const fetchAverageSessionData = async (userId) => {
  if (USE_MOCKED_DATA) {
    return getMockedAverageSessionData();
  }
  try {
    const response = await fetch(
      `${API_BASE_URL}/user/${userId}/average-sessions`,
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de session moyenne:",
      error,
    );
    throw error;
  }
};

const fetchPerformanceData = async (userId) => {
  if (USE_MOCKED_DATA) {
    return getMockedPerformanceData();
  }

  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de performance:",
      error,
    );
    throw error;
  }
};

export const getUserData = async (userId) => {
  return USE_MOCKED_DATA ? getMockedUserData() : await fetchUserData(userId);
};

export const getActivityData = async (userId) => {
  return USE_MOCKED_DATA
    ? getMockedActivityData()
    : await fetchActivityData(userId);
};

export const getAverageSessionData = async (userId) => {
  return USE_MOCKED_DATA
    ? getMockedAverageSessionData()
    : await fetchAverageSessionData(userId);
};

export const getPerformanceData = async (userId) => {
  return USE_MOCKED_DATA
    ? getMockedPerformanceData()
    : await fetchPerformanceData(userId);
};
