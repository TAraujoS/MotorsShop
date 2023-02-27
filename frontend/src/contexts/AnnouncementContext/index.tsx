import React, { createContext, useState } from "react";
import {
  AnnouncementProps,
  IAnnouncement,
  IAnnouncementContext,
} from "../../interfaces/announcements";
import api from "../../services/api";

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnoucementProvider = ({ children }: AnnouncementProps) => {
  const [addAdModal, setAddAdModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [announcementId, setAnnouncementId] = useState("");
  const [allAnnouncements, setAllAnnouncements] = useState<IAnnouncement[]>([]);

  const [userAnnouncements, setUserAnnouncements] = useState<
    Array<IAnnouncement>
  >([]);

  const registerAnnouncement = async (data: IAnnouncement) => {
    await api
      .post<IAnnouncement>("/announcement", data)
      .then((res) => {
        console.log(res);
        setUserAnnouncements([...userAnnouncements, res.data]);
        setAddAdModal(false);
        setSuccessModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listAllAnnouncements = async () => {
    await api
      .get<IAnnouncement[]>("/announcement")
      .then((res) => {
        console.log(res);
        setAllAnnouncements(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listAnnouncement = async (announcement_id: string) => {
    await api
      .get<IAnnouncement>(`/announcement/${announcement_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listUserAnnouncements = async (user_id: string) => {
    await api
      .get(`announcement/user/${user_id}`)
      .then((res) => {
        setUserAnnouncements(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editAnnouncement = async (data: IAnnouncement) => {
    await api
      .patch(`/announcement/${announcementId}`, data)
      .then((res) => {
        const findAnnouncement = userAnnouncements.find(
          (announcement) => announcement.id === announcementId
        );
        const announcementIndex = userAnnouncements.indexOf(findAnnouncement!);

        userAnnouncements.splice(announcementIndex, 1, data);

        console.log(res);
        setEditModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAnnouncement = async () => {
    await api
      .delete(`/announcement/${announcementId}`)
      .then((res) => {
        const findAnnouncement = userAnnouncements.find(
          (announcement) => announcement.id === announcementId
        );
        const contactIndex = userAnnouncements.indexOf(findAnnouncement!);

        userAnnouncements.splice(contactIndex, 1);

        console.log(res);
        setDeleteModal(false);
        setEditModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AnnouncementContext.Provider
      value={{
        registerAnnouncement,
        listAllAnnouncements,
        listAnnouncement,
        listUserAnnouncements,
        addAdModal,
        setAddAdModal,
        successModal,
        setSuccessModal,
        userAnnouncements,
        editModal,
        deleteModal,
        setEditModal,
        setDeleteModal,
        editAnnouncement,
        deleteAnnouncement,
        setAnnouncementId,
        allAnnouncements,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
