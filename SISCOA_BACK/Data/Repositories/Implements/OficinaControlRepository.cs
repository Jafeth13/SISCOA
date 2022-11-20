using Data.Data;
using Entities.Models;
using Entities.Util;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories.Repositories.Implements
{
    public class OficinaControlRepository : GenericRepository<TSISCOA_OficinaControl>, IOficinaControlRepository
    {
        private readonly SISCOA_Context siscoa_context;
        public OficinaControlRepository(SISCOA_Context siscoa_context) : base(siscoa_context)
        {
            this.siscoa_context = siscoa_context;
        }
        public new async Task<IEnumerable<TSISCOA_OficinaControl>> GetAll()
        {
            //obtiene los controles pendientes
            var verify = siscoa_context.OficinaControles.Where(x => x.FK_TN_ESTADO_SISCOA_OficinaControl == 1).ToList();
            verify.ForEach(x => {
                //Si tiene dias extra
                if (x.TN_DiasExtra > 0)
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin_DiasExtra, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                else
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                siscoa_context.OficinaControles.AddOrUpdate(x);
            });

            siscoa_context.SaveChanges();

            var list = await siscoa_context.OficinaControles.ToListAsync();
            foreach (var item in list)
            {
                item.Archivos = await siscoa_context.Archivos.Where(x => x.FK_TN_OficinaControl_SISCOA_Archivo == item.ID).ToListAsync();
            }
            return list;
        }
        public new async Task<TSISCOA_OficinaControl> GetById(int id)
        {
            //obtiene los controles pendientes
            var verify = siscoa_context.OficinaControles.Where(x => x.FK_TN_ESTADO_SISCOA_OficinaControl == 1).ToList();
            verify.ForEach(x => {
                //Si tiene dias extra
                if (x.TN_DiasExtra > 0)
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin_DiasExtra, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                else
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                siscoa_context.OficinaControles.AddOrUpdate(x);
            });

            siscoa_context.SaveChanges();

            var item = await siscoa_context.OficinaControles.FindAsync(id);
            item.TSISCOA_Control = await siscoa_context.Controles.FindAsync(item.FK_TN_CONTROL_SISCOA_OficinaControl);
            item.TSISCOA_Periodo = await siscoa_context.Periodos.FindAsync(item.FK_TN_PERIODO_SISCOA_OficinaControl);
            item.TSISCOA_Oficina = await siscoa_context.Oficinas.FindAsync(item.FK_TN_OFICINA_SISCOA_OficinaControl);
            item.TSISCOA_Estado = await siscoa_context.Estados.FindAsync(item.FK_TN_ESTADO_SISCOA_OficinaControl);
            item.Archivos = await siscoa_context.Archivos.Where(x => x.FK_TN_OficinaControl_SISCOA_Archivo == item.ID).ToListAsync();
            return item;
        }

        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsByStates()
        {
            //obtiene los controles pendientes
            var verify = siscoa_context.OficinaControles.Where(x => x.FK_TN_ESTADO_SISCOA_OficinaControl == 1).ToList();
            verify.ForEach(x => {
                //Si tiene dias extra
                if (x.TN_DiasExtra > 0)
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin_DiasExtra, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                else
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                siscoa_context.OficinaControles.AddOrUpdate(x);
            });

            siscoa_context.SaveChanges();

            var list = await siscoa_context.OficinaControles
                .GroupBy(x => x.FK_TN_ESTADO_SISCOA_OficinaControl)
                .Select(x => new TSISCOA_DataGraphics
                {
                   
                    name = x.FirstOrDefault().TSISCOA_Estado.TC_Nombre,
                    value = x.Count()
                }).ToListAsync();
            return list;
        }

        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsSlopes()
        {
            var list = await siscoa_context.OficinaControles
                .Where(x => x.TSISCOA_Estado.TC_Nombre == "Pendiente")
                .GroupBy(x => x.FK_TN_PERIODO_SISCOA_OficinaControl)
                .Select(x => new TSISCOA_DataGraphics
                {
                    
                    name = x.FirstOrDefault().TSISCOA_Periodo.TC_Nombre,
                    value = x.Count()
                }).ToListAsync();
            return list;
        }
        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetDataGraphicsTable_ControlsSlopes()
        {
            var list = await siscoa_context.OficinaControles
                .Where(x => x.TSISCOA_Estado.TC_Nombre == "Pendiente")
                .ToListAsync();
            return list;
        }

        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetOfficeControlByIdOffice(int id)
        {
            //obtiene los controles pendientes
            var verify = siscoa_context.OficinaControles.Where(x => x.FK_TN_ESTADO_SISCOA_OficinaControl == 1).ToList();
            verify.ForEach(x => {
                //Si tiene dias extra
                if (x.TN_DiasExtra > 0)
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin_DiasExtra, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                else
                {//verifica si esta atrasado
                    if (DateTime.Compare(x.TF_FechaFin, DateTime.Now) < 0)
                    {//cambia el estado a atrasado
                        x.FK_TN_ESTADO_SISCOA_OficinaControl = 3;
                    }
                }
                siscoa_context.OficinaControles.AddOrUpdate(x);
            });

            siscoa_context.SaveChanges();

            var list = await siscoa_context.OficinaControles
                .Where(x => x.FK_TN_OFICINA_SISCOA_OficinaControl == id)
                .ToListAsync();
            return list;
        }

        public async Task<IEnumerable<TSISCOA_DataGraphics>> GetDataGraphics_ControlsWithExtraDays()
        {
            var list = await siscoa_context.OficinaControles
                .Where(x => x.TF_FechaFin_DiasExtra != new DateTime(0001,01,01,00,00,00))
                .GroupBy(x => x.FK_TN_CONTROL_SISCOA_OficinaControl)
                .Select(x => new TSISCOA_DataGraphics
                {
                   
                    name = x.FirstOrDefault().TSISCOA_Control.TC_Nombre,
                    value = x.Count()
                }).ToListAsync();
            return list;
        }

        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetDataGraphicsTable_ControlsWithExtraDays()
        {
            var list = await siscoa_context.OficinaControles
                .Where(x => x.TF_FechaFin_DiasExtra != new DateTime(0001,01,01,00,00,00))
                .ToListAsync();
            return list;
        }

        public async Task<IEnumerable<TSISCOA_OficinaControl>> GetData_ControlsByStateLate()
        {
            var listStates = await siscoa_context.OficinaControles.Where(x => x.FK_TN_ESTADO_SISCOA_OficinaControl == 3).ToListAsync();
            return listStates;
        }

        public async Task<TSISCOA_OficinaControl> RestoreOficinaControlById(TSISCOA_OficinaControl entity)
        {
            var files = await siscoa_context.Archivos.Where(x => x.FK_TN_OficinaControl_SISCOA_Archivo == entity.ID).ToListAsync();
            foreach (var item in files)
            {
                siscoa_context.Archivos.Remove(item);
            }

            siscoa_context.OficinaControles.AddOrUpdate(entity);
            await siscoa_context.SaveChangesAsync();
            return entity;
        }

        public new async Task Delete(int id)
        {
            var entity = await GetById(id);
            var files = await siscoa_context.Archivos.Where(x => x.FK_TN_OficinaControl_SISCOA_Archivo == entity.ID).ToListAsync();

            if (entity == null)
                throw new Exception("The entity is null");

            foreach (var item in files)
            {
                siscoa_context.Archivos.Remove(item);
            }

            siscoa_context.OficinaControles.Remove(entity);
            await siscoa_context.SaveChangesAsync();
        }
    }
}
