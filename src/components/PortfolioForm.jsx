import React from 'react';
import { useForm } from 'react-hook-form';
import { usePortfolioStore } from '../store/portfolioStore';

const PortfolioForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const addStudent = usePortfolioStore((state) => state.addStudent);

  const onSubmit = (data) => {
    addStudent(data);
    reset();
    alert('เพิ่ม Portfolio เรียบร้อยแล้ว');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>ชื่อ:</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span>กรุณากรอกชื่อ</span>}
      </div>

      <div>
        <label>นามสกุล:</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>กรุณากรอกนามสกุล</span>}
      </div>

      <div>
        <label>ที่อยู่:</label>
        <input {...register('address', { required: true })} />
        {errors.address && <span>กรุณากรอกที่อยู่</span>}
      </div>

      <div>
        <label>เบอร์โทรศัพท์:</label>
        <input {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} />
        {errors.phone && <span>กรุณากรอกเบอร์โทรศัพท์ 10 หลัก</span>}
      </div>

      <div>
        <label>โรงเรียน:</label>
        <input {...register('school', { required: true })} />
        {errors.school && <span>กรุณากรอกโรงเรียน</span>}
      </div>

      <div>
        <label>GPA:</label>
        <input type="number" step="0.01" {...register('gpa', { required: true, min: 0, max: 4 })} />
        {errors.gpa && <span>กรุณากรอก GPA 0.00 - 4.00</span>}
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

      <button type="submit">เพิ่ม Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
