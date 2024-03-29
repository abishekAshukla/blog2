import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppState } from '../../contexts/Context'
import { APIState } from '../../contexts/Apis'
import Content from './Content'
import Sidecontent from './Sidecontent'
import Loader from '../UI/Loader'
import { toast } from 'react-toastify'
import './styles/post.css'

const Post = () => {
  const { setSidebar, scrollDir, sidebar } = AppState()
  let { id } = useParams()
  const { getBlog, blogPostData } = APIState()
  useEffect(() => {
    getBlog(id)
    toast.info(
      'The content on this page is not written by me, i am using it only for the project showcase'
    )
  }, [id])

  return (
    <div
      className={
        sidebar === true
          ? 'post-section side-bar-open bg-[#EDEDED]'
          : 'post-section bg-[#EDEDED] flex justify-center sm:pt-[15px]'
      }
      style={{
        marginTop: scrollDir === 'scrolling down' ? '0px' : '60px',
      }}
      onClick={() => {
        setSidebar(false)
      }}
      // {/* closing sidebar on clicking */}
    >
      {blogPostData.title == undefined ? <Loader /> : <Content />}
      <Sidecontent />
    </div>
  )
}

export default Post
