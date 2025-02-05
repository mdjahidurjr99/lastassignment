import React, { useEffect } from "react";
import Layout from "../component/layout/Layout";
import Team from "../component/team/Team";
import TeamStore from "../store/TeamStore";

const AboutPage = () => {
  const { teamListRequest } = TeamStore();

  useEffect(() => {
    (async () => {
      await teamListRequest();
    })();
  }, []);
  return (
    <Layout>
      <div className="p-6 text-center">
        <h2 className="text-[50px] font-bold ">About Me</h2>
        <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, suscipit veniam impedit pariatur nostrum! Minima excepturi voluptate autem ipsum harum ab quasi, explicabo corrupti perferendis beatae totam ad aperiam non vel nostrum corporis consequuntur delectus magni sit molestiae in. Repellat quos sit eum blanditiis mollitia consequatur ipsa cumque sunt ullam a odit, totam ad molestiae dicta nemo iure molestias minima. Amet illum atque sunt magni alias numquam error saepe excepturi provident debitis, vitae quos eos sequi nobis illo voluptatibus consequatur minima! Recusandae ut ad voluptatem ducimus iste voluptatum nulla adipisci molestiae eum beatae, corporis quam tempore impedit consequuntur laboriosam?</p>
      </div>
      <Team />
    </Layout>
  );
};

export default AboutPage;
