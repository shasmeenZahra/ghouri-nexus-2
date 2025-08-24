const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("whatsapp", form.whatsapp);
  formData.append("experience", form.experience);
  formData.append("anything", form.anything);

  if (form.file) {
    formData.append("file", form.file); // ✅ file bhi bhej do
  }

  const res = await fetch("/api/candidate", {
    method: "POST",
    body: formData, // ✅ ab json nahi, formData bhejna hai
  });

  const result = await res.json();
  alert(result.message);
};
