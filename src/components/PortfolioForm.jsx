import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePortfolioStore } from '../store/portfolioStore';
import FileUpload from './FileUpload';

const PortfolioForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const addStudent = usePortfolioStore((state) => state.addStudent);

  // State สำหรับเก็บไฟล์หลายชนิด
  const [studentImage, setStudentImage] = useState(null);
  const [activityImage, setActivityImage] = useState(null);
  const [awardImage, setAwardImage] = useState(null);
  const [projectImage, setProjectImage] = useState(null);

  const onSubmit = (data) => {
    addStudent({
      ...data,
      studentImage,
      activityImage,
      awardImage,
      projectImage
    });
    reset();
    setStudentImage(null);
    setActivityImage(null);
    setAwardImage(null);
    setProjectImage(null);
    alert('เพิ่ม Portfolio เรียบร้อยแล้ว!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom:'20px'}}>
      <h2>เพิ่ม Portfolio นักเรียน</h2>

      <div>
        <label>ชื่อ:</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span style={{color:'red'}}>กรุณากรอกชื่อ</span>}
      </div>

      <div>
        <label>นามสกุล:</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span style={{color:'red'}}>กรุณากรอกนามสกุล</span>}
      </div>

      <div>
        <label>ที่อยู่:</label>
        <input {...register('address', { required: true })} />
        {errors.address && <span style={{color:'red'}}>กรุณากรอกที่อยู่</span>}
      </div>

      <div>
        <label>เบอร์โทรศัพท์:</label>
        <input {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} />
        {errors.phone && <span style={{color:'red'}}>กรุณากรอกเบอร์โทรศัพท์ 10 หลัก</span>}
      </div>

      <div>
        <label>โรงเรียน:</label>
        <input {...register('school', { required: true })} />
        {errors.school && <span style={{color:'red'}}>กรุณากรอกโรงเรียน</span>}
      </div>

      <div>
        <label>GPA:</label>
        <input type="number" step="0.01" {...register('gpa', { required:true, min:0, max:4 })} />
        {errors.gpa && <span style={{color:'red'}}>กรุณากรอก GPA 0.00 - 4.00</span>}
      </div>

      <div>
        <label>ความสามารถพิเศษ:</label>
        <input {...register('skills')} />
      </div>

      <div>
        <label>เหตุผลในการสมัคร:</label>
        <textarea {...register('reason')} />
      </div>

      <div>
        <label>สาขาที่เลือก:</label>
        <input {...register('major')} />
      </div>

      <div>
        <label>มหาวิทยาลัย:</label>
        <input {...register('university')} />
      </div>

      {/* File uploads */}
      <FileUpload label="รูปนักเรียน" onFileSelect={setStudentImage} />
      <FileUpload label="กิจกรรม" onFileSelect={setActivityImage} />
      <FileUpload label="รางวัล" onFileSelect={setAwardImage} />
      <FileUpload label="ผลงาน" onFileSelect={setProjectImage} />

      <button type="submit" style={{marginTop:'10px'}}>เพิ่ม Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
